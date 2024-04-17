const { Telegraf } = require("telegraf");
const axios = require("axios");

const bot = new Telegraf("6923168568:AAE_WJMxQyqj65kMeEdf6ydAckOT2do5GAY");

bot.start((ctx) => ctx.replyWithHTML("<b>Welcome To Ritick Lath Bot</b>"));

const arr = [
  "BinarySearch",
  "BubbleSort",
  "BucketSort",
  "CountingSort",
  "HeapSort",
  "InsertionSort",
  "LinearSearch",
  "MergeSort",
  "QuickSort",
];

bot.command("help", (ctx) => {
  ctx.reply("ALGORITHM'S WE PROVIDE SOLUTIONS TO:");
  ctx.reply("/" + arr[0]);
  ctx.reply("/" + arr[1]);
  ctx.reply("/" + arr[2]);
  ctx.reply("/" + arr[3]);
  ctx.reply("/" + arr[4]);
  ctx.reply("/" + arr[5]);
  ctx.reply("/" + arr[6]);
  ctx.reply("/" + arr[7]);
  ctx.reply("/" + arr[8]);
});

for (let i = 0; i < arr.length; i++) {
  bot.command(`${arr[i]}`, async (ctx) => {
    const response = await axios.get(
      `https://raw.githubusercontent.com/RitickLath/Sorting-Algorithms/main/${arr[i]}.java`
    );
    ctx.reply(response.data);
  });
}

bot.launch();
