import { Command } from "../types/Command";


export const CommandsData: Command[] = [
    {
        name: "quote",
        description: "Auto quote formatter for the quotebook",
        options: [
            {
                name: "text",
                description: "text to be quoted",
                type: 3,
            },
            {
                name: "person",
                description: "person to be quoted",
                type: 3,
            }
        ]
    },
    {
        name: "diss-logan",
        description: "Diss that mf logan",
        options: {}
    }
];