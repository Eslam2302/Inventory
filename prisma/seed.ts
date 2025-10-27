import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.product.deleteMany({});
    console.log("Cleared existing products");

    const demoUserId = "316840dd-6fd1-43fe-a6a1-67969c8e2c96";

    // Create sample products

    await prisma.product.createMany({
        data: Array.from({ length: 25 }).map((_ , i) => ({
            userID: demoUserId,
            name: `Product ${i + 1}`,
            price: Number((Math.random() * 90 + 10).toFixed(2)),
            quantity: Math.floor(Math.random() * 20),
            lowStockAt: 5,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
        })),
    });

    console.log("Seeding completed.");

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });