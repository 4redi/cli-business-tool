#!/usr/bin/env node

/**
 *         _____                   /|
        |   \      ____        / |
  __    |    \    /\   |      /  ;
 /\  \  |     \  /  \  |     /  ;
/,'\  \ |      \/  : \ |    /   ;
~  ;   \|      /   :  \|   /   ;
   |    \     /   :'  |   /    ;
   |     \   /    :   |  /    ;
   |      \ /    :'   | /     ;
   |       /     :    |/     ;
   |      /     :'    |      ;
    \    /      :     |     ;
     \  /      :'     |     ;
      \       :'      |    ;
       \______:_______|___;


 */

       import chalk from "chalk";
       const log=console.log;
       const symbol=chalk.hex("#e9d795")(" ღ ");

       const message=chalk.hex("#9bafcf")(
        "  ╰┈➤    " + chalk.underline("Hello my name is Redi, I'm a soon to be SW engineer! :)) ")  + "  "
       );

       const begin= "Here are my links!:";

       const github=chalk.hex("#a4ebb1")(
        "Github: " + chalk.reset("https://github.com/4redi")
       );

       const tumblr= chalk.hex("#764c9e")(
        "Tumblr: " + chalk.reset("https://tumblr.com")
       )

       const linkedin=chalk.hex("#453ce8")(
        "Linkedin: "
       )
log("\n");
       log(chalk.blue(`
        _..._
        .'     '.      _
       /    .-""-\\   _/ \\ 
     .-|   /:.   |  |   |
     |  \\  |:.   /.-'-./
     | .-'-;:__.'    =/
     .'=  *=|REDI _.='
    /   _.  |    ;
   ;-.-'|    \\   |
  /   | \\    _\\  _\\
  \\__/'._;.  ==' ==\\
           \\    \\   |
           /    /   /
           /-._/-._/
          \\   \`\\  \\
            \`-._/._/
`));
log(chalk.red("✧༺♥༻∞"));
// Display information
log("\n" + symbol + message+ symbol );
log("\n" + begin);
log(github);
log(tumblr);
log(linkedin+ chalk.bgHex("#ccbb8b").hex("#1a1a1a").italic("https://www.linkedin.com/in/redi-%C3%A7urri-32b52b315"));


       

