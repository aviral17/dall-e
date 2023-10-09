import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

// Here we are passing (prompt) from CreatePost form input,,, so if that prompt from our input and the randomPrompt matches, then getRandomPrompt(prompt) function will run again so that we get different image, so this is how surprise me will work

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt); // To ensure that same Random Prompt don't occur twice or thrice consecutively

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
