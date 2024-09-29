import { prisma } from "..";

interface filtersInterface {
    date?: {
        gte: Date;
        lte: Date;
    };
    exportersName?: {
        contains: string;
    };
    type?: {
        contains: string;
    };
    fobValue?: {
        gte: number;
        lte: number;
    };
}


async function test(req : any, res : any) {
   
        const { startDate, endDate, name, type, minValue, maxValue } = req.query;
    
        // Construct a dynamic filter object
        let filters : filtersInterface = {};
    
        if (startDate && endDate) {
            filters.date = {
                gte: new Date(startDate),
                lte: new Date(endDate),
            };
        }
    
        if (name) {
            filters.exportersName = {
                contains: name,
            };
        }
    
        if (type) {
            filters.type = {
                contains: type,
            };
        }
    
        if (minValue && maxValue) {
            filters.fobValue = {
                gte: parseFloat(minValue),
                lte: parseFloat(maxValue),
            };
        }
    
        // Fetch data based on filters
        try {
            const data = await prisma.part1Section1.findMany({
                where: filters,
                select: {
                    id: true,
                    exportersName: true,
                    type: true,
                    adCode: true,
                    ifscNo: true,
                }
            } );
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
}


export { test };