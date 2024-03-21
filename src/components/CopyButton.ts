export const getCopyButton = (codeBlock: HTMLPreElement) => {
  const copyButton = document.createElement("button")

  let pastTimeout: any

  const notify = (text: string) => {
    copyButton.innerText = text

    if (pastTimeout) clearTimeout(pastTimeout)

    pastTimeout = setTimeout(() => {
      copyButton.innerText = "Copy"
    }, 1500)
  }

  copyButton.addEventListener("click", () => {
    navigator.clipboard
      .writeText(codeBlock.querySelector("code")?.innerText ?? "undefined")
      .then(() => notify("Copied"))
      .catch(() => notify("Error"))
  })

  copyButton.innerText = "Copy"

  copyButton.className =
    "sticky right-1 top-1 bg-gray-700 text-white px-1.5 py-0.5 text-xs rounded"

  return copyButton
}

export const attachCopyButtons = (className: string) => {
  document.querySelectorAll(className).forEach((codeBlock) => {
    if (!(codeBlock instanceof HTMLPreElement)) return

    const copyButton = getCopyButton(codeBlock)

    codeBlock.appendChild(copyButton)
  })
}
