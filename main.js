const begin = () => {
    setTimeout(() => {
        console.log("Initializing Hacking module...")
    }, 500);
}

const username = () => {
    setTimeout(() => {
        console.log("Hacking into Akash Device...")
    }, 1500);
}

const get_username = () => {
    setTimeout(() => {
        console.log("Username Found. \nUsername: akash_398")
    }, 4500);
}

const cracking = () => {
    setTimeout(() => {
        console.log("Cracking akash_398 password...")
    }, 5500);
}

const cracking_pass = () => {
    setTimeout(() => {
        console.log("Password cracked and sent to Hacker-Man...")
    }, 6500);
}



const hack_device = async () => {
    let p1 = await begin();
    let p2 = await username();
    let p3 = await get_username();
    let p4 = await cracking();
    let p5 = await cracking_pass();
    console.log(p1, p2, p3, p4, p5)
}

hack_device()