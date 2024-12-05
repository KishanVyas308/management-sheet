import { prisma } from "..";

export function addInvoice(req: any, res: any) {
    try {

        const responce = prisma.invoice.create({
            data : req.body
        })
    } catch(e) {
        return res.json({message: e})
    }

    return res.json({message: "Added successfully"})
}

export function addEWayBill(req: any, res: any) {
    try {

        const responce = prisma.eWayBillDetails.create({
            data : req.body
        })
    } catch(e) {
        return res.json({message: e})
    }

    return res.json({message: "Added successfully"})
}