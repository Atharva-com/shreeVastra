import Product from "@/models/Product"
import connectDb from "@/middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == 'POST') {
            let p = new Product({
                title: req.body.title, 
                slug: req.body.slug, 
                desc: req.body.desc, 
                img: req.body.img, 
                category: req.body.category,
                size: req.body.size,
                color: req.body.color,
                price: req.body.price, 
                availableQty: req.body.availableQty, 
            })
            console.log(p)
            await p.save()
            res.status(200).json({ success: true })
        }
    else {
        res.status(400).json({ error: "Invalid method" })
    }

}

export default connectDb(handler);