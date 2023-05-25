import type { APIRoute } from "astro"
import { prisma } from "src/utils/prisma"
import { PUBLIC_KEY } from "src/utils/webPush"
import webPush from "web-push"

webPush.setVapidDetails(
  "https://sujang-git-dev-sujang958.vercel.app/",
  PUBLIC_KEY,
  process.env.SECRET_PRIVATE_KEY ?? ""
)

if (!("SECRET_PRIVATE_KEY" in process.env)) {
  process.exit(404)
}

export const post: APIRoute = async ({ request }) => {
  const body: PushSubscriptionJSON = await request.json()

  if (!body.endpoint || !body.expirationTime)
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Endpoint and expirationTime are mandatory fields",
      }),
      { status: 400 }
    )

  await prisma.subscription.create({
    data: {
      endpoint: body.endpoint,
      expirationTime: body.expirationTime,
    },
  })

  return new Response("", { status: 201 })
}
