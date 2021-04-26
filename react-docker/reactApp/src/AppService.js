export async function getInventory() {
    console.log("hei")
    const response = await fetch('/api/get');
    return await response.json();
}