import type { APIRoute } from "astro"
import { prisma } from "src/utils/prisma"
import { PUBLIC_KEY } from "src/utils/webPush"
import webPush from "web-push"

webPush.setVapidDetails(
  "https://sujang-git-dev-sujang958.vercel.app/",
  PUBLIC_KEY,
  import.meta.env.SECRET_PRIVATE_KEY ?? ""
)

export const post: APIRoute = async ({ request }) => {
  const body: { subscription: PushSubscriptionJSON } = await request.json()

  if (!body?.subscription)
    return new Response(
      JSON.stringify({ ok: false, message: "Subscription required" }),
      { status: 400 }
    )

  const { subscription } = body

  if (
    !subscription.endpoint ||
    !subscription.keys?.auth ||
    !subscription.keys?.p256dh
  )
    return new Response(
      JSON.stringify({
        ok: false,
        message: "endpoint, auth and p256dh are mandatory fields",
      }),
      { status: 400 }
    )

  const storedSubscription = await prisma.subscription.findUnique({
    where: { endpoint: subscription.endpoint },
  })

  if (storedSubscription)
    return new Response(
      JSON.stringify({ ok: true, message: "Already registered" }),
      { status: 201 }
    )

  await prisma.subscription.create({
    data: {
      endpoint: subscription.endpoint,
      expirationTime: subscription.expirationTime,
      auth: subscription.keys.auth,
      p256dh: subscription.keys.p256dh,
    },
  })

  return new Response(JSON.stringify({ ok: true }), { status: 201 })
}

// webPush.sendNotification({keys: {}}, "Your Push Payload Text")
