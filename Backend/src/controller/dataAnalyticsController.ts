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

async function directExportDataOnDate(req: any, res: any) {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(200).json({ selectDateError: 'Start date and end date are required' });
    }

    try {
        const data = await prisma.basicSheet.findMany({
            where: {
                uploadedDate: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
            orderBy: {
                uploadedDate: 'desc',
            },
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}

async function indirectExportDataOnDate(req: any, res: any) {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(200).json({ selectDateError: 'Start date and end date are required' });
    }

    try {
        const data = await prisma.basicSheet.findMany({
            where: {
                uploadedDate: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
            orderBy: {
                uploadedDate: 'desc',
            },
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
async function shippingBillDataOnDate(req: any, res: any) {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(200).json({ selectDateError: 'Start date and end date are required' });
    }

    try {
        const data = await prisma.basicSheet.findMany({
            where: {
                uploadedDate: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
            orderBy: {
                uploadedDate: 'desc',
            },
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}

async function invoiceDataOnDate(req: any, res: any) {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(200).json({ selectDateError: 'Start date and end date are required' });
    }

    try {
        const data = await prisma.basicSheet.findMany({
            where: {
                uploadedDate: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
            orderBy: {
                uploadedDate: 'desc',
            },
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}

async function ewayBillDataOnDate(req: any, res: any) {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(200).json({ selectDateError: 'Start date and end date are required' });
    }

    try {
        const data = await prisma.basicSheet.findMany({
            where: {
                uploadedDate: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
            orderBy: {
                uploadedDate: 'desc',
            },
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}


export {  directExportDataOnDate, indirectExportDataOnDate, ewayBillDataOnDate, invoiceDataOnDate, shippingBillDataOnDate };