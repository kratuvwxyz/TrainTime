let clock;

$(document).ready(function () {
  clock = $(".clock").FlipClock({
    clockFace: "TwelveHourClock",
  });
});

let trainSchedule = [
  {
    lightColor: "green",
    train: "JANTADAL EXP",
    from: "DELHI",
    destination: "AHMEDABAD",
    timeHour: "15",
    timeMinute: "30",
    statusr: "ON TIME",
    platform: "02",
  },
  {
    lightColor: "red",
    train: "MOHENJO EXP",
    from: "MUMBAI",
    destination: "CHENNAI",
    timeHour: "23",
    timeMinute: "00",
    statusr: "ON TIME",
    platform: "08",
  },
  {
    lightColor: "green",
    train: "JODHA EXP",
    from: "MADHYA PRADESH",
    destination: "KASHMIR",
    timeHour: "18",
    timeMinute: "12",
    statusr: "DELAY",
    platform: "11",
  },
];

$(document).ready(function () {
  for(let i = 0; i < trainSchedule.length; i++) {
    let lidata = `
    <tr>
      <td id="train${i}"></td>
      <td id="from${i}"></td>
      <td id="destination${i}"></td>
      <td>
        <table>
          <tr>
            <td id="timeHour${i}"></td>
            <td id="timeMinute${i}"></td>
          </tr>
        </table>
      </td>
      <td id="statusr${i}"></td>
      <td id="platform${i}"></td>
    </tr>
    `
    $(".t1").append(lidata);
    train = new CTR.SolariBoard({
      container: train0,
      format: [CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter],
      segmentWidth: 30,
      segmentHeight: 40,
      fontSize: 20,
    });
  
    train.setContent(trainSchedule[`${i}`].train);
  
    from = new CTR.SolariBoard({
      container: from0,
      format: [CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter],
      segmentWidth: 30,
      segmentHeight: 40,
      fontSize: 20,
    });
  
    from.setContent(trainSchedule[`${i}`].from);
  
    destination = new CTR.SolariBoard({
      container: destination0,
      format: [CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter],
      segmentWidth: 30,
      segmentHeight: 40,
      fontSize: 20,
    });
  
    destination.setContent(trainSchedule[`${i}`].destination);
  
    timeHour = new CTR.SolariBoard({
      container: timeHour0,
      format: [CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
      segmentWidth: 30,
      segmentHeight: 40,
      fontSize: 20,
    });
  
    timeHour.setContent(trainSchedule[`${i}`].timeHour);
  
    timeMinute = new CTR.SolariBoard({
      container: timeMinute0,
      format: [CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
      segmentWidth: 30,
      segmentHeight: 40,
      fontSize: 20,
    });
  
    timeMinute.setContent(trainSchedule[`${i}`].timeMinute);
  
    statusr = new CTR.SolariBoard({
      container: statusr0,
      format: [CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter, CTR.SOLARIVALUES.letter],
      segmentWidth: 30,
      segmentHeight: 40,
      fontSize: 20,
    });
  
    statusr.setContent(trainSchedule[`${i}`].statusr);
  
    platform = new CTR.SolariBoard({
      container: platform0,
      format: [CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
      segmentWidth: 30,
      segmentHeight: 40,
      fontSize: 20,
    });
  
    platform.setContent(trainSchedule[`${i}`].platform);
  }

}, false);

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/