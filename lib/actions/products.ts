"use server";

import { redirect } from "next/navigation";
import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";
import { z } from "zod";

const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  quantity: z.coerce.number().int().min(0, "Quantity must be non-negative"),
  price: z.coerce.number().nonnegative("Price must be non-negative"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();

  const id = String(formData.get("id") || "");

  await prisma.product.deleteMany({
    where: {
      id: id,
      userID: user.id,
    },
  });
}

export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();

  const parsed = ProductSchema.safeParse({
    name: String(formData.get("name") || ""),
    quantity: Number(formData.get("quantity") || 0),
    price: Number(formData.get("price") || 0),
    sku: formData.get("sku") ? String(formData.get("sku")) : undefined,
    lowStockAt: formData.get("lowStockAt")
      ? Number(formData.get("lowStockAt"))
      : undefined,
  });

  if (!parsed.success) {
    throw new Error("Validation failed");
  }

  try {
    await prisma.product.create({
      data: {...parsed.data, userID: user.id }
    });
    redirect("/inventory");
  } catch (error) {
    throw new Error("Failed to create product");
  }

}
