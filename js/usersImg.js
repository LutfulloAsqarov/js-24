// export let usersImg = [
//     "https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg",
//     "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1568",
//     "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-170195-1036622.jpg&fm=jpg",
//     "https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg",
//     "https://img.freepik.com/premium-photo/rugged-manly-studio-shot-handsome-man-against-gray-background_590464-19912.jpg",
//     "https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg",
//     "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
//     "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
//     "https://t3.ftcdn.net/jpg/03/77/30/16/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7.jpg",
//     "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg",
// ];

function primeFactors(str) {
    let a = str.split("");
    if (typeof +a[a.length - 1] === "number") {
        a[a.length - 1] = +a[a.length - 1] + 1;
    } else {
        a.push(1);
    }
    return a.join("");
}

console.log(primeFactors("foo29"));
