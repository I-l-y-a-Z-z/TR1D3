import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
// get all offers

app.get('/offers', async (req: Request, res: Response) => {
  try {
    const offer = await prisma.offer.findMany({})
    res.status(201).json(offer);
  } catch (error) {
    res.status(400).json({"error": "INTERNAL SERVER ERROR"});
  }
});

// get by id
app.get("/offer/:offerId", async (req:Request, res:Response) => {
  let offerId = Number(req.params.offerId)
  try{
    let offer = await prisma.offer.findUnique({
      where: {
        id: offerId
      }
    })

    res.status(200).json({offer})
  }catch{
    res.status(500).json({"Error": "Something went wrong!!"})
  }
})




/// create post:

app.post("/create/offer", async(req:Request, res:Response) => {
  let {image, title, category, stars, userId} = req.body;
  try{
    let new_offer = await prisma.offer.create({
      data:{
        imageSrc: image,
        title: title,
        category: category,
        stars: stars,
        userId: userId
      }
    })
    res.status(201).json(new_offer)
  }catch{
    res.status(500).json({"Error":"we couldn't create the offer"})
  }
})


///// authentication

// create user

app.post("/create/user", async(req:Request, res:Response) => {
  /*
  model User {
  id           Int      @id @default(autoincrement())
  fullname     String
  email        String
  bio          String
  pfp_link     String

  buildingName String
  major        String
  
  offers       Offer[]
}
  */


  let {fullname, email, bio, pfp_link, buildingName, major} = req.body;

  
})






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
