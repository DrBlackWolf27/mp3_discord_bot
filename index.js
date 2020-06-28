var isReady = true;

if (isReady && msg.content === 'ssplay') {
    isReady = false;
    var voiceChannel = bot.guilds.get(msg.guild.id).channels.find(c => c.id == 'CHANNEL_ID' && c.type == "voice");
    voiceChannel.join().then(connection => {
      //const dispatcher = connection.playFile('01.mp3');
      var dispatcher = connection.playFile('exemple.mp3');
      dispatcher.on("end", end => {
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
    isReady = true;
}

if(msg.content === 'sstop'){
    try{
        var voiceChannel = bot.guilds.get(msg.guild.id).channels.find(c => c.id == 'CHANNEL_ID' && c.type == "voice");
        voiceChannel.leave();
    } catch(err){
        console.log(err)
    }
}