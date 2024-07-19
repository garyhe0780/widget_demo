import Widget from "../../islands/Widget.tsx";
import { load } from "$std/dotenv";

export default async function CapitalRasing() {
  const env = await load();
  const url = env["WIDGET_URL"]; 

  console.log('url is, ', url);
  console.log(Deno.env.get('WIDGET_URL'));


  return <div class="space-y-4">
    <div class="w-screen h-[200px] relative">
      <img src="https://plus.unsplash.com/premium_photo-1678823283560-4453bbd2a368?q=80&w=2942&auto=format&fit=crop" alt="banner" class="w-screen h-[200px] object-cover"/>

      <h1 class="absolute bottom-4 left-4 text-white text-lg font-bold">Capital Rasing</h1>
      <div class="p-4">
        <Widget url={url} />
      </div>
    </div>
  </div>;
}
