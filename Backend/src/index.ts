import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import { middleware } from './middleware/auth_middleware';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
// get all offers

app.get('/offers', async (req: Request, res: Response) => {
  try {
    const offer = await prisma.offer.findMany({})
    res.status(201).json(offer);
  } catch (error) {
    res.status(400).json({ "error": "INTERNAL SERVER ERROR" });
  }
});

// get by id
app.get("/offer/:offerId", async (req: Request, res: Response) => {
  let offerId = Number(req.params.offerId)
  try {
    let offer = await prisma.offer.findUnique({
      where: {
        id: offerId
      }
    })

    res.status(200).json({ offer })
  } catch {
    res.status(500).json({ "Error": "Something went wrong!!" })
  }
})




/// create post:

app.post("/create/offer",middleware,async (req: Request, res: Response) => {
  let { image, title, category, stars, userId } = req.body;
  try {
    let new_offer = await prisma.offer.create({
      data: {
        imageSrc: image,
        title: title,
        category: category,
        stars: stars,
        userId: userId
      }
    })
    res.status(201).json(new_offer)
  } catch {
    res.status(500).json({ msg: "we couldn't create the offer" })
  }
})


///// authentication

// create user

app.post("/create/user", async (req: Request, res: Response) => {
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


  let { fullname, email, bio, pfp_link, buildingName, major } = req.body;
  try {
    let user = prisma.user.create({
      data: {
        fullname: fullname,
        email: email,
        bio: bio,
        pfp_link: pfp_link,
        buildingName: buildingName,
        major: major
      }
    })
    let token = sign({id: (await user).id}, process.env.SECRET as string)
    res.sendStatus(201).cookie("tkn", token)
  } catch {
    res.sendStatus(500).json({ msg: "Couldn't create user" })
  }
})


app.post("/login", (req:Request, res:Response) => {
  let {email}:{email:string}= req.body;

  let user = prisma.user.findUnique({
    where:{email: email}
  })

  // here we can do some auth magic to give the user the token
})


const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT} 🚀`);
  console.log((process.env.SECRET !== undefined) ? "Secret loaded...": "Enviroment erro!!!")
});
