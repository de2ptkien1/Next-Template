// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@/utils/prisma"

type DataRetunedType = {
  data: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataRetunedType>) {
  const user = await prisma.user.findMany()
  return res.status(200).json({
    data: user
  })
}
