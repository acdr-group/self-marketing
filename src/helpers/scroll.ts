export const scrollToNode = (node: HTMLElement | null) => {
    if (node === null) return
    node.scrollIntoView({
        behavior: "smooth",
    })
}