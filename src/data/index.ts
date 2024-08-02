import { Category } from "@/app/dashboard/configurations/categories/columns"

export const categories: Array<Category> = []
for (let i = 1; i <= 300; i++) {
    categories.push({
        key: i,
        serial: 0,
        name: `Coding & Programming ${i}`,
        createdOn: "2024-06-28T11:18:25.354Z",
        spotlight: true,
        status: false,
    })
}

categories.forEach((item, index) => {item.serial = index + 1})