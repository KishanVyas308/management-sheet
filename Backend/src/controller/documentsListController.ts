import { prisma } from "..";

export async function addInvoice(req: any, res: any) {
    try {

        const responce = await prisma.invoice.create({
            data : req.body
        })
    } catch(e) {
        console.log(e);
        
        return res.json({message: e})
    }

    return res.json({message: "Added successfully"})
}

export async function addEWayBill(req: any, res: any) {
    try {

        const responce = await prisma.eWayBillDetails.create({
            data : req.body
        })
    } catch(e) {
        return res.json({message: e})
    }

    return res.json({message: "Added successfully"})
}

export async function addEpcgLicense(req: any, res: any) {
    try {

     
      
        
        const responce = await prisma.ePCGLicense.create({
            data : req.body
        })

       
        
    } catch(e) {
        
        return res.json({message: e})
    }

    return res.json({message: "Added successfully"})
}