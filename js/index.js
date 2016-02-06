
window.isTouchDevice =  (/android|webos|iphone|ipod|ipad|blackberry|iemobile/i.test(navigator.userAgent.toLowerCase()) )
var clickEvent = window.isTouchDevice ? 'touchstart' : 'click';

var base58 = (function(alpha) {
    var alphabet = alpha || '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        base = alphabet.length;
    return {
        encode: function(enc) {
            if(typeof enc!=='number' || enc !== parseInt(enc))
                throw '"encode" only accepts integers.';
            var encoded = '';
            while(enc) {
                var remainder = enc % base;
                enc = Math.floor(enc / base);
                encoded = alphabet[remainder].toString() + encoded;        
            }
            return encoded;
        },
        decode: function(dec) {
            if(typeof dec!=='string')
                throw '"decode" only accepts strings.';            
            var decoded = 0;
            while(dec) {
                var alphabetPosition = alphabet.indexOf(dec[0]);
                if (alphabetPosition < 0)
                    throw '"decode" can\'t find "' + dec[0] + '" in the alphabet: "' + alphabet + '"';
                var powerOf = dec.length - 1;
                decoded += alphabetPosition * (Math.pow(base, powerOf));
                dec = dec.substring(1);
            }
            return decoded;
        }
    };
})();


var randomWords = function(num_words, min_word_length) {
	var wordDB = ["that","what","this","know","have","just","your","with","well","here","like","yeah","want","come","good","they","look","when","time","will","okay","back","mean","tell","from","were","been","some","then","take","make","need","love","sure","them","more","over","down","very","said","much","life","even","give","only","help","talk","wait","into","find","call","told","ever","than","away","feel","work","fine","home","last","keep","does","stop","long","guys","kind","made","care","hear","baby","nice","else","stay","done","mind","hell","came","jack","idea","best","must","room","left","knew","real","hope","name","same","went","girl","show","next","hurt","both","dead","kill","hard","hold","seen","deal","took","once","gone","head","most","used","part","live","face","each","soon","wife","move","such","miss","meet","many","damn","lost","case","turn","wish","kids","late","five","town","year","play","hate","says","gave","fact","open","rest","word","glad","days","whoa","gets","door","hand","easy","walk","mine","shut","able","four","cool","eyes","news","half","side","read","pick","also","date","line","plan","lose","fire","free","shit","high","week","past","sick","game","goes","save","book","seem","sort","safe","shot","felt","paul","full","dear","fuck","john","hour","lady","body","hang","send","died","jake","sign","boys","hair","luck","luis","kiss","pain","cold","fast","food","none","test","drop","sent","city","lucy","poor","pull","busy","joey","less","step","fall","kept","till","evil","ross","trip","club","calm","todd","fair","tony","rick","rose","york","wake","nbsp","ring","dude","team","ride","wear","nick","jail","luke","tape","bill","feet","ones","list","mess","cute","ryan","road","beat","fell","near","beth","pass","gift","dark","self","nora","aunt","sake","blow","mama","lied","adam","mike","ball","cops","blue","deep","park","rafe","lord","join","card","soul","joke","cell","lead","paid","push","boss","risk","eric","born","seat","song","boat","hide","nine","huge","sell","quit","josh","troy","fool","mary","mark","alan","slow","kick","grab","rock","rich","arms","brad","ways","cash","nose","skye","beer","drug","kyle","type","alex","gosh","king","wall","jump","star","warm","goin","suit","ruin","fish","fear","anna","mail","cost","liza","note","chad","sing","foot","bank","rory","tree","dare","shop","plus","roll","butt","nuts","prue","grow","cake","mood","crap","lies","neck","land","lots","file","lock","wine","spot","viki","fill","nope","keys","area","wild","jill","desk","band","neil","doin","sees","hall","wind","pack","ship","pool","held","jerk","copy","keri","ahem","tess","skin","code","page","burn","film","hero","dumb","whoo","hole","hank","reva","bear","bite","liar","gwen","vote","gold","rule","upon","rush","blew","kate","form","onto","holy","duty","legs","dave","loud","andy","jess","army","ugly","seth","coat","moon","lips","size","sami","sold","lily","cole","roof","bird","fake","bomb","bout","toby","clue","west","hook","port","dean","loss","view","heat","feed","drag","hire","warn","post","milk","suck","ends","dump","rent","rain","pray","meat","raul","ours","cook","babe","main","jury","stan","sexy","blah","cars","pete","weak","trey","slip","abby","sean","dick","race","lake","deny","tear","ears","tiny","draw","harm","snow","dogs","base","lift","woke","lisa","camp","wise","doll","pair","edge","guns","bike","bone","term","meal","bail","hung","dawn","wash","lets","whom","tied","dies","rude","grew","soft","cast","fate","prom","east","unit","crew","guts","shoe","kane","tall","runs","jeez","soup","chef","tory","zack","male","tour","puts","whip","heck","laid","bust","pure","nail","hill","lane","dirt","bond","jobs","bars","rate","trap","eggs","bags","gate","chat","pine","mate","matt","glen","maid","bath","phil","flat","pity","farm","hers","role","jane","pink","coma","bull","bell","mimi","firm","gang","rise","skip","hunt","fail","wide","soda","load","fred","swim","yell","sale","wood","odds","thin","mall","mile","bart","math","chip","zero","nate","wolf","cure","rare","wore","tail","site","hits","spit","dust","carl","lame","path","bowl","wire","cave","boom","vice","opal","duck","spin","tool","roxy","wrap","loan","belt","lack","buck","yard","heal","buzz","sons","zach","zone","junk","owns","host","fund","barn","doug","vega","greg","torn","golf","niki","emma","deck","ease","wave","thee","laws","asks","oops","goal","mass","gina","wing","snap","pace","sink","gain","duke","tend","tone","nina","bang","piss","toss","geez","bury","hmmm","fits","slut","flew","drew","cris","amen","vows","darn","clay","uses","inch","flag","debt","sand","papa","tank","beef","wins","salt","wipe","neat","limo","anti","hint","soap","flip","jean","rope","barb","ouch","whew","oooh","shhh","eden","thou","rach","ohhh","bugs","tale","hart","twin","berg","tune","mask","kirk","gary","punk","knee","cage","toes","pour","exit","cats","pipe","data","chop","tina","scam","rats","pill","lean","pays","shed","menu","diet","corn","grey","dime","pile","toys","poem","exam","joel","dish","iron","dana","tent","noon","dial","acts","ward","taxi","sets","jeff","gray","seek","item","gear","fans","tons","aids","noah","grip","bump","feds","earn","root","gods","leak","fond","june","rome","tips","macy","slap","plug","oath","horn","bait","plot","dive","sore","glow","dorm","bend","ahhh","eats","chin","seal","rage","sack","earl","bent","fuel","foul","dull","ages","deaf","july","cuts","tore","pops","flow","rape","core","anne","rico","fort","coke","loft","java","lawn","anya","ally","hood","bare","leap","gown","pony","lamp","tech","owes","cafe","stab","scum","loop","worn","plea","frog","brat","cozy","tire","sara","oven","mill","nest","gene","bald","scar","pole","sits","pigs","link","riot","task","sail","rash","mars","hush","cows","bebe","scan","mini","tube","silk","pump","pale","haul","boot","arts","karl","lion","ruby","auto","tuna","sins","pier","lamb","turk","eyed","sock","reed","noel","fork","yale","palm","ford","hack","ruth","ding","ties","fold","enzo","wade","tits","rack","tops","quiz","prep","envy","sofa","dock","stat","solo","mmmm","lois","jazz","hawk","stir","deed","tara","robe","poet","cuba","cent","rice","mijo","hike","acid","geek","vibe","stud","mami","hats","goat","pond","tuck","rear","lick","lazy","boyd","bits","teen","sane","navy","worm","tick","fuss","bush","lila","gail","slam","porn","chew","peel","jude","cart","glue","deer","bing","ribs","judy","melt","pork","undo","pres","wont","fame","bake","teri","sang","heir","cups","thus","mint","hose","rode","memo","hiya","cock","buys","buff","dope","limb","leaf","clip","woah","iced","bore","rita","peek","beep","weed","owed","lend","herb","fist","cult","gunn","bolt","bein","tray","nooo","aaah","gale","cape","fran","bold","dose","rath","kong","cans","urge","mack","lulu","leon","hail","crib","rely","sole","rolf","jeep","slim","pose","info","pals","mick","mere","jews","hong","alec","nazi","pope","mock","cuff","woof","void","sour","seed","pact","knot","coin","walt","rays","toto","raid","milo","bets","nude","nana","cord","beds","beam","rank","outa","lung","curb","lust","kent","aged","puke","psst","ling","ciao","wars","heel","bean","mole","meow","lynn","surf","semi","fink","mojo","lure","doom","chet","smug","monk","mild","hyde","asap","vent","crab","awww","moms","drum","tide","ohio","rosa","numb","iris","hunk","edna","stem","dork","lone","yuck","mode","gram","dice","pitt","phew","gran","fade","disk","cane","wage","maya","lena","joan","fart","dash","bark","theo","slot","poof","pawn","sunk","rang","finn","uhhh","turf","puff","fras","echo","fare","erin","buns","meds","folk","boil","veil","shaw","dame","cone","yada","vial","tomb","rudy","nuns","jinx","herr","clan","vest","pike","myth","keen","buts","unto","toll","ping","nerd","fuse","frat","chow","text","owen","zoey","sark","pets","moss","flaw","soil","knox","dang","comb","bela","maze","vast","tabs","okey","curl","poll","dale","pimp","nell","coup","veal","crop","bees","wuss","stew","poop","poke","mend","iowa","foam","bass","thug","joni","homo","hips","flea","dent","choo","ants","vile","outs","obey","lump","edgy","didn","vain","hash","halt","grim","raft","peep","jaye","vase","disc","claw","weep","mold","mice","drip","bats","swat","ammo","span","mart","hans","sued","soak","peru","nemo","lola","loaf","burt","crow","coop","brag","bind","peak","mayo","fest","dots","cody","brit","adds","wand","utah","mona","kacl","jody","duct","bozo","bert","asia","yoga","wits","reel","rave","lent","lads","jets","itch","argh","mija","lime","grad","shoo","reid","pens","dove","bunk","limp","whiz","toad","taco","prey","olds","jock","bulb","yank","whit","trim","sigh","pcpd","lair","hots","haha","ganz","fury","dory","cunt","cope","cola","vous","ummm","kurt","wink","mash","daph","wimp","vern","polo","oval","maps","indy","bash","pies","mule","comm","slit","roar","peas","nosy","hump","clam","vein","sooo","sire","pint","labs","hoot","snag","ripe","pins","otis","oral","juan","gabe","fees","visa","tart","pros","nada","drue","dire","dief","desi","about","right","going","think","there","would","could","gonna","never","sorry","where","thing","maybe","doing","thank","still","again","great","night","first","other","after","these","those","wrong","being","guess","leave","place","their","might","every","whole","house","woman","hello","which","years","money","happy","three","found","world","heard","honey","while","gotta","alone","since","start","today","ready","until","wants","wanna","stuff","worry","truth","cause","knows","heart","point","later","phone","looks","bring","trust","check","least","makes","means","crazy","party","watch","asked","under","break","close","tried","needs","times","stand","comes","story","funny","child","yours","sleep","young","sonny","lucky","hours","hands","ahead","fight","quite","death","along","seems","lives","upset","carly","ethan","front","loved","clear","drink","daddy","sweet","alive","sense","meant","david","blood","sound","fault","water","women","speak","order","worse","spend","power","girls","taken","loves","lying","weird","known","touch","crane","throw","grace","white","words","drive","marry","light","frank","dream","class","dance","takes","weeks","worth","given","swear","piece","black","movie","catch","honor","admit","feels","broke","tired","jason","human","niles","blame","favor","court","clean","learn","works","relax","prove","danny","smart","small","table","craig","mouth","billy","shall","shoot","stick","angry","buddy","write","early","angel","kinda","lunch","eight","ridge","music","paper","tough","emily","state","count","proud","agree","seven","timmy","share","offer","hurry","voice","chris","jerry","dress","jesus","james","hotel","enjoy","quiet","short","spent","calls","using","bitch","apart","plans","floor","earth","cover","judge","shawn","mommy","worst","saved","plane","quick","stuck","store","kevin","doubt","major","buffy","chloe","erica","moved","crime","likes","magic","uncle","blair","laura","liked","rules","brain","aaron","awful","dying","chief","faith","simon","month","visit","brady","press","smell","spell","paris","board","force","space","third","fifty","miles","idiot","agent","bunch","bucks","track","shoes","scene","peace","demon","diane","witch","drunk","tells","knock","karen","belle","gives","turns","keeps","molly","cares","extra","whose","outta","wrote","books","waste","named","henry","proof","slept","maria","twice","drugs","isaac","finds","begin","smile","laugh","treat","amber","green","stole","pacey","fired","lived","piper","katie","games","glass","mitch","steal","silly","teach","fresh","trial","radio","reach","dirty","larry","price","guard","total","paige","trick","taste","south","nurse","raise","cross","carry","group","eddie","study","legal","forty","starr","pants","freak","level","folks","steve","cream","focus","truly","threw","hurts","field","allow","grand","shirt","chair","rough","harry","ought","empty","round","shows","aware","tight","guest","match","salem","naked","tests","video","scott","often","names","issue","final","usual","screw","train","peter","brian","truck","ended","margo","teeth","split","smoke","older","horse","cards","spoke","scare","marah","beach","brown","hired","heads","hated","build","loose","staff","colin","caleb","blind","queen","hates","sight","bride","toast","stars","jimmy","birth","lexie","diego","grade","kenny","bobby","pizza","grown","sally","ideas","color","heavy","blake","kelly","shame","local","scary","loser","above","jamal","merry","couch","shock","enemy","crash","sarah","lines","north","knife","badly","speed","santa","paint","built","candy","daria","trade","spare","aside","sugar","ricky","stood","woods","brave","storm","large","roger","julia","based","style","stone","block","shake","serve","facts","lousy","stage","lucas","trash","awake","donna","river","vegas","cheap","clock","susan","super","avoid","score","exact","pills","annie","fancy","drove","cared","shape","lewis","stock","chest","juice","noise","exist","files","sucks","casey","notes","event","doors","nancy","giles","devil","anger","fixed","photo","chose","mateo","diana","crack","model","radar","gimme","chase","kinds","guilt","terms","purse","hilda","cabin","wound","dixie","stake","moves","nasty","shots","shift","plate","aidan","argue","alarm","nerve","walks","stamp","helps","claim","talks","chick","snake","lover","balls","among","crowd","pride","solve","tommy","punch","mayor","helen","parts","wheel","nikki","signs","walls","maris","sixty","coach","leads","falls","image","panic","smith","cruel","wings","faces","cases","ghost","sneak","marty","greta","barry","dates","twins","swing","solid","flash","crush","logan","stays","plant","lower","bored","suite","ocean","bones","quinn","minds","seats","humor","hopes","fifth","sharp","randy","giant","burns","cheer","flesh","zelda","adult","spike","fever","sweat","prize","tries","fully","union","jamie","colby","steps","comin","bless","rooms","kills","grant","tears","knees","chill","joint","coast","grave","mixed","gifts","brand","pilar","dozen","curse","alien","value","salad","pilot","penny","bread","grief","homer","jenny","virus","wreck","chain","birds","blown","bound","charm","apple","texas","pulse","jokes","frame","opera","julie","holly","civil","fruit","trees","rocks","owner","fairy","banks","louis","chuck","print","motel","grams","trace","enter","alice","peggy","loyal","plays","actor","plain","attic","fella","andie","acted","gross","badge","sakes","labor","glory","trunk","armed","dunno","kitty","mercy","wayne","cable","tense","sport","route","reese","hoped","stops","shown","sides","china","linda","began","sauce","bills","bauer","jones","guide","vince","minor","creep","keith","rings","royal","diner","blast","basic","towel","clown","habit","roman","react","prime","romeo","eaten","beats","media","darla","ralph","betty","alley","range","award","swore","boots","thief","lobby","drama","noble","forth","songs","poker","davis","trail","saint","liver","drawn","whore","bruce","march","moral","aisle","cents","squad","benny","piano","strip","below","lloyd","pound","chips","suits","carol","boxes","spoil","libby","realm","climb","title","twist","fries","niece","handy","crawl","pages","phase","madam","bundy","cheat","thick","ellen","phony","angle","socks","blows","tabby","mouse","marks","alike","pitch","jacks","goose","dated","marcy","beast","italy","holds","alert","wives","stink","tower","slide","jesse","diary","basis","brief","spill","costs","fraud","brush","cliff","bunny","scout","spite","nanny","naive","walsh","roses","patch","beans","metal","kelso","traci","booth","steak","youth","lopez","daily","apply","units","steel","sales","marie","donor","swell","bacon","holes","fence","lemme","faced","bench","tryin","shove","moron","pussy","megan","limit","forms","tiger","louie","groom","hears","sheet","puppy","patty","bible","slack","rumor","hills","theme","tapes","maxie","genoa","cried","quote","tammy","cloud","blank","tooth","inner","tramp","jabot","dealt","souls","nicky","upper","marge","corky","filed","drill","opens","broad","yacht","fried","abuse","sworn","stare","nigel","burst","chaos","cells","mandy","booze","sweep","ditch","wears","skull","carla","harsh","bravo","shine","nails","drank","norma","renee","clark","heels","grass","stunt","fears","sword","rosie","riley","evans","teddy","safer","missy","sends","belly","shark","miami","wakes","sorts","ashes","yards","votes","wendy","lenny","owned","scarf","loses","tools","slave","donny","setup","sandy","mikey","blade","raped","added","risks","lungs","delia","eager","click","tyler","vault","sorel","petty","kiddo","derek","sixth","scale","delay","clubs","risky","doyle","india","steam","dixon","deals","baker","vodka","wiped","roast","penis","greek","types","topic","robin","altar","goods","claus","skirt","shave","porch","drops","dizzy","chili","begun","rehab","leery","kraft","draft","cigar","ships","ranch","lynne","homes","bribe","beers","fuzzy","comic","bingo","bells","sorta","motor","clerk","wrist","nicer","flies","dodge","thumb","pulls","janet","erase","ankle","minus","meets","cindy","boats","vicki","sayin","mason","snack","latin","tumor","teams","marco","spray","picks","occur","logic","equal","mitzi","error","docks","becky","slice","shore","rolls","plead","kicks","irish","widow","repay","howdy","bonus","messy","entry","blond","bleed","takin","clyde","chart","backs","waves","dante","arson","whack","april","fires","codes","bears","susie","cough","drown","asses","drain","stall","spots","psych","fools","beard","album","sammy","makin","shell","shane","ellie","taxes","sheep","rocky","stiff","hunch","crown","brass","lemon","creek","bruno","goody","lodge","essay","baked","kathy","cheek","adore","adopt","voted","sloan","ninth","dough","cabot","snuck","novel","brick","sunny","label","glove","condo","spoon","reads","elvis","funds","joyce","foley","aunts","lined","grill","clues","wally","sober","wired","sting","bette","wagon","stacy","robot","lease","grows","flame","flush","smack","eagle","burnt","trips","sperm","satan","gates","choir","lance","daisy","chess","rides","faint","korea","pearl","nixon","alibi","vital","tokyo","shiny","refer","mummy","hobby","coats","prior","choke","rally","jeans","japan","irony","torch","prick","laser","fetch","marsh","deeds","medal","adams","wires","films","carlo","weigh","shout","meals","maker","bonds","bogus","manny","cycle","havin","hairy","alpha","roots","fling","tracy","roads","lotta","locks","dummy","clint","bluff","trent","rifle","mamie","heidi","goals","dried","toxic","panel","fatal","dolls","rusty","mount","cured","bully","ahold","shelf","spine","latte","theft","sykes","suing","senor","barge","float","olive","scent","quest","haunt","fleet","doris","cakes","gavin","outer","monte","winds","needy","adler","yummy","valid","sands","rabbi","prank","mates","gabby","faked","skill","burke","quack","petey","items","cordy","tease","swamp","shook","scoop","boobs","sewer","peach","lasts","crank","tales","areas","hangs","dudes","bites","roxie","champ","angie","perry","macho","drake","cuffs","broom","tasty","stack","sells","pinch","truce","steer","butts","trish","slick","pasta","ideal","batch","spark","ruled","pains","momma","jelly","hairs","allen","verge","timer","taped","tutor","serum","scuse","depth","cries","bombs","asian","smash","jumps","horny","worms","swiss","shaft","haven","grasp","fluid","chunk","stain","shack","kings","jabez","flick","ellis","swept","notch","moose","armor","wheat","straw","manly","drift","chops","vague","tires","terry","stash","madly","halls","chalk","breed","villa","input","fudge","blend","jolly","greet","gravy","edgar","whale","tribe","ounce","monty","meter","felon","disco","agony","veins","tweek","cease","juicy","comfy","aaaah","stove","scars","pipes","milan","legit","boost","blues","bliss","token","tends","lands","dutch","dryer","cocoa","brake","sized","organ","grabs","blink","bands","willy","slips","karma","brace","blunt","betsy","agnes","spain","sadly","noted","jerks","hitch","flirt","titan","sandi","masks","elton","shred","saves","razor","leash","fucks","flown","feast","bella","jaffa","hayes","curve","cathy","alter","teeny","scrub","orbit","fails","tails","spicy","silva","sheer","seize","loony","corps","arrow","abbey","waits","syrup","genes","cargo","untie","ruins","cutie","sarge","funky","craft","rebel","livin","kirby","hoops","urine","tanks","paths","dewey","woody","urban","poems","oscar","moore","lions","havoc","aspen","slime","polls","plaza","hatch","elbow","cuban","cloth","claws","witty","tempt","shade","nolan","movin","hence","glenn","queer","onion","noses","bulls","bloom","tuned","stoop","layer","jules","greed","flood","elope","brian","bimbo","tubes","motto","froze","fiber","wacky","shaky","rsquo","nutty","nobel","whine","utter","strap","rated","paged","mines","jumbo","hound","dwell","ducks","beale","gloat","filth","cedar","wrath","waist","traps","sushi","hooks","butch","vomit","rogue","piggy","packs","squat","spice","rhyme","pause","horns","dumps","crock","clamp","andre","tenth","sings","pushy","poppy","ohhhh","noooo","grove","delta","clare","brody","bases","adios","wraps","wiser","waltz","voila","slate","ledge","cyril","buyer","askin","stein","pager","marlo","manor","klaus","grape","goofy","dairy","tanya","tango","panda","oprah","loans","lists","jumpy","germs","freed","bambi","babes","skate","linen","knots","jimbo","gypsy","grind","goons","frost","dolly","damon","cocky","asset","whoop","towns","terri","shops","imply","doren","debts","booty","spies","perez","musta","moses","merit","foods","cosmo","vibes","sissy","ropes","newly","lilly","freud","fiona","crate","ahhhh","wedge","wager","unfit","perks","ooooh","mindy","kinky","globe","downs","anita","wanta","tunes","stalk","negro","floss","cramp","corny","yikes","sniff","scope","salsa","pumps","multi","merle","marta","fills","feeds","egypt","decaf","mails","curly","cupid","abort","wyatt","verse","tying","slash","parks","irene","genie","fangs","draws","donut","daryl","bumps","apron","amigo","vouch","vista","stern","slimy","shhhh","reign","intel","hicks","grain","exits","crook","colon","ziggy","tacky","reset","pairs","moody","maine","canal","belts","bagel","tonic","rates","noisy","midst","givin","carve","brock","snoop","skies","mourn","mafia","lyman","lydia","josie","janie","golly","edges","dylan","dumbo","welsh","viper","sided","reade","probe","limbo","liars","holtz","hazel","gauge","ernie","elisa","eatin","dense","cider","barto","arena","wolfe","smear","drums","boxer","audio","acres","wacko","thugs","suzie","sling","seeds","faxed","costa","bikes","allah","wells","welch","weary","stale","señor","porno","jacob","geeks","budge","swift","picky","mural","really","little","should","please","people","things","before","better","around","always","listen","wanted","thanks","trying","mother","father","course","enough","family","coming","pretty","friend","saying","minute","matter","myself","having","happen","excuse","called","second","school","forget","chance","anyone","person","making","anyway","reason","change","taking","afraid","sister","couple","either","doctor","though","killed","police","dinner","almost","stupid","answer","office","moment","sounds","behind","inside","number","nobody","living","asking","figure","coffee","seeing","months","thinks","handle","giving","unless","needed","scared","talked","choice","secret","future","turned","wonder","worked","cannot","twenty","looked","except","expect","rather","julian","moving","murder","strong","honest","missed","longer","george","entire","brooke","caught","street","alison","forgot","become","middle","follow","miguel","ladies","gotten","hoping","phoebe","simple","finish","victor","prison","normal","lawyer","dawson","alexis","acting","accept","lately","lovely","report","bought","single","record","window","return","walked","guilty","brenda","public","bother","island","broken","advice","losing","helped","summer","thirty","dreams","across","olivia","charge","cassie","picked","system","notice","edmund","letter","decide","double","showed","seemed","memory","hungry","during","others","sharon","philip","livvie","papers","sooner","plenty","attack","ground","danger","eating","career","arrest","pulled","easier","killer","dating","powers","closer","simone","hiding","daphne","bottom","sudden","church","flight","remind","places","hardly","choose","credit","locked","loving","agreed","fuckin","bianca","crying","belong","mister","closed","paying","assume","asleep","shower","camera","bigger","breath","french","movies","monica","action","client","taylor","christ","lights","insane","elaine","rachel","deacon","passed","bottle","beyond","common","starts","played","barely","health","cousin","twelve","simply","spirit","speech","orders","bonnie","escape","austin","within","regret","heaven","corner","ruined","search","damage","afford","settle","stayed","friday","kramer","finger","saving","martin","leaves","ticket","taught","planet","harvey","kissed","bright","amanda","fraser","babies","flying","states","nicole","center","buying","opened","edward","cheese","signed","parker","dollar","master","social","nature","threat","bloody","lonely","jacket","invite","lesson","caused","victim","harder","beauty","pushed","holden","energy","brings","zander","became","famous","boring","headed","rights","pardon","closet","helena","forced","prefer","animal","itself","market","affair","harley","prince","daniel","pieces","newman","nearly","points","waited","nothin","weapon","valley","sexual","switch","issues","weight","bullet","indeed","decent","spring","santos","messed","united","filled","kicked","strike","raised","slayer","monkey","sydney","nights","jackie","maggie","timing","johnny","bridge","source","theory","burned","access","drinks","morgan","ashley","failed","period","freeze","player","mostly","stress","thrown","faster","borrow","junior","vision","member","battle","xander","safety","fellow","fucked","sports","stolen","pocket","ignore","fourth","talent","carmen","garage","demons","travel","dumped","willow","remain","cancer","likely","buried","driver","throat","intend","manage","tongue","repeat","mirror","genius","square","london","smells","sunday","stairs","lizzie","easily","damned","riding","create","effect","turkey","spoken","rescue","europe","suffer","bryant","talkin","fought","cancel","walter","pounds","outfit","recall","signal","defend","amount","hearts","button","warned","crisis","abbott","awhile","carter","monday","gettin","refuse","mexico","artist","bodies","mental","poison","guests","expert","jumped","audrey","toilet","wesley","season","scream","senior","wallet","thomas","eleven","option","former","assure","robert","snyder","clinic","target","silver","busted","harold","winter","commit","spread","ending","league","proper","leader","yellow","latest","highly","winner","parent","tricks","insist","higher","shared","psycho","handed","appear","garden","palmer","female","silent","clever","estate","surely","boston","claire","pissed","blonde","brains","agency","degree","packed","lookin","direct","breaks","orange","locker","policy","joking","detail","served","secure","toward","screen","hidden","stands","laurie","guards","desire","shrink","walker","mickey","wishes","caring","joshua","dimera","actual","effort","county","fallen","thorne","hughes","smooth","marina","butter","remove","unfair","slowly","motion","desert","hooked","golden","tennis","tricia","studio","frozen","africa","france","unlike","priest","affect","robbie","admire","shadow","object","deeply","wasted","fellas","pierce","mortal","chosen","arnold","agenda","series","howard","forces","review","eighty","brandy","relief","nathan","horses","lauren","design","circle","backup","campus","ninety","elliot","pheebs","skills","bobbie","photos","ripped","prints","flower","ephram","writer","agents","steven","earned","counts","dahlia","nurses","virgin","events","candle","castle","demand","basket","motive","stuart","museum","tracks","sookie","loaded","cooper","sample","misery","potter","isabel","indian","facing","engine","booked","cookie","hayley","creepy","rotten","device","zombie","supply","aliens","joined","resist","dammit","norman","palace","claims","phones","mighty","andrew","stable","pillow","mature","canada","stroke","steady","wilson","nephew","angels","finest","stefan","jersey","gloves","result","cheers","doubts","crimes","useful","makeup","louise","gather","cowboy","winnie","trauma","urgent","drawer","warren","tragic","punish","sherry","insult","beside","begged","senses","sheila","worthy","reward","polite","checks","fooled","bitter","tested","string","debate","lovers","escort","damnit","circus","sucked","behave","struck","sticks","singer","attend","scheme","joanna","worker","poetry","gentle","script","picnic","voices","scares","recent","jewish","cruise","upside","proves","parked","german","hawaii","wicked","merely","colors","budget","prayer","chicks","betray","begins","waiter","sucker","leslie","tables","filthy","burger","landed","fairly","deeper","arrive","unique","oughta","grades","subtle","harris","adults","parade","harbor","status","remote","laying","muscle","aitoro","legend","kindly","wheels","temper","proven","houses","denial","gotcha","drives","potion","proved","hammer","reggie","limits","needle","stinks","rianna","losers","blocks","tunnel","sealed","denied","sierra","rabbit","behalf","waking","hollow","gordon","coward","sheets","forest","spells","launch","belief","appeal","empire","maddie","sacred","manner","seduce","modern","liquor","janine","murphy","shayne","powder","passes","oxygen","nicely","mutual","hockey","angela","warton","safely","aboard","expose","spider","jessie","tattoo","parole","speaks","rubber","sidney","scotch","dining","fights","driven","causes","bubble","border","sloane","deputy","plates","fridge","alonzo","washed","solved","misses","jungle","dancer","cotton","cooked","weston","editor","peanut","horror","faking","billie","chapel","accuse","humans","formal","firing","stores","joseph","arthur","wounds","symbol","patrol","jordan","ironic","anyhow","carpet","scotty","miller","dealer","tastes","marcus","wished","towels","profit","ginger","backed","sunset","nation","spying","exists","depend","absurd","potato","forbid","rounds","robbed","injury","freaks","burden","reveal","kidnap","chairs","statue","serial","carver","oliver","oldest","doomed","coffin","bureau","stones","oswald","casino","buster","random","guitar","willie","pencil","nerves","kidney","avatar","shirts","posted","purple","favour","breast","placed","martha","dallas","wisdom","collar","ramsey","muffin","dishes","albert","rented","impact","casual","beacon","values","skinny","covers","ghosts","favors","beaten","advise","hooker","active","cranes","column","resort","munson","avenue","gamble","donald","truman","elders","connie","idiots","factor","hunter","devane","phrase","fixing","bucket","supper","recipe","kisses","webber","minded","jeremy","copies","carlos","banana","august","knight","fields","ritual","hiring","hating","fusion","comedy","throws","ladder","tissue","tellin","deadly","triple","tenney","foster","soccer","salary","rumors","medium","liking","severe","puzzle","puerto","dickie","caller","bounce","blamed","wizard","repair","troops","scores","pursue","groups","denver","shares","resent","laughs","branch","poster","models","theirs","connor","unable","treats","inches","dennis","accent","witter","racing","locate","gretel","debbie","marked","gossip","tricky","shield","rushed","resume","stella","dragon","cherry","russia","rolled","ethics","creeps","smythe","batman","sailor","define","defeat","shorts","lester","harper","floors","barrel","slight","madame","flames","lounge","lifted","beings","yelled","waving","plants","nailed","hannah","annual","polish","chased","lilith","hattie","filing","worlds","fucker","freaky","narrow","levels","inform","eugene","danced","warden","tossed","temple","permit","marrow","hatred","esther","corpse","morgue","larger","cursed","combat","brutal","assets","pepper","divine","thrill","sitter","offers","morris","update","coulda","actors","tender","popped","planes","esteem","prayed","plague","honour","adjust","clouds","gorman","cutter","trophy","eighth","towers","risked","keeper","shelly","puppet","liquid","felony","evelyn","pledge","louder","height","fabric","sleeve","juliet","workin","growth","barnes","trusts","terror","roller","lethal","length","clarke","cigars","sponge","sleepy","nigger","grudge","bumped","alaska","weasel","rocket","relate","berlin","barton","apples","sleeps","cooler","banner","yankee","streak","sector","lasted","heroin","habits","fisher","bailed","versus","maniac","classy","amazed","slater","scenes","rising","finals","courts","carrie","waters","visual","vaughn","sticky","smiles","shrimp","ransom","intent","gladly","cereal","subway","strain","dental","whatta","nearby","lining","global","butler","ballet","michel","method","manual","helmet","goddam","shawna","humble","greedy","jammed","fiance","duties","porter","noises","marine","legacy","gently","darryl","scored","nicest","intern","freddy","framed","awards","videos","thelma","spends","seated","reject","reckon","turner","korean","hudson","heroes","balsom","wooden","praise","luxury","loosen","janice","errand","blames","strict","sketch","shifts","grease","shaken","serves","portal","jewels","carrot","volume","serena","organs","mentor","marvin","listed","kenyon","forman","breeze","writes","rarely","jasper","hereby","cheeks","cellar","trucks","tomato","senate","native","exotic","calvin","brooks","smoked","skiing","righty","nevada","assist","violet","travis","partly","marone","cheesy","scouts","ribbon","notion","income","immune","easter","wander","shoved","scroll","retire","cranky","clowns","whoops","snakes","salmon","nickel","garlic","summit","squash","myrtle","feelin","duncan","rupert","virgil","tipped","richie","rhythm","lawson","images","geller","dwight","agrees","woulda","waitin","visits","tasted","ruling","rogers","pirate","maxine","deaths","anchor","addict","throne","teresa","prices","paloma","judges","mozart","luther","hitler","behold","tapped","stakes","shoots","cities","cattle","adding","soviet","shaped","mouths","modest","galaxy","vessel","rental","darlin","traced","sweaty","healed","crappy","samuel","poured","brakes","summon","sneaky","sloppy","regard","hooray","extend","voting","refill","graham","baxter","sensed","dozens","bailey","amulet","unlock","voters","hunger","dreamt","taller","queens","erased","adores","vivian","ronald","kitten","hassle","dearly","bomber","stinky","richer","raging","pookie","breach","losses","justin","invest","caviar","canyon","barbie","stream","stocks","owners","nelson","bounty","smiled","marian","horton","gutter","chains","boxing","beware","swings","shovel","marcel","lyrics","benton","ticked","purely","lowest","kiddin","equals","decade","casket","broker","biting","traded","thread","smelly","sharks","runnin","newest","laptop","intact","grampa","diaper","darrin","charms","bushes","bummed","saddle","pistol","kansas","extent","caesar","burial","bronze","barney","vitals","pierre","notify","mornin","gannon","stroll","sittin","ordeal","farmer","donate","digger","virtue","sights","napkin","leanna","heroic","facial","bummer","mcphee","lavery","honors","cheque","charts","salute","resign","lonnie","clause","blouse","tucked","touchy","sparky","screws","offend","knives","curfew","allows","wealth","walkin","turtle","starve","sleigh","recess","pinned","parlor","issued","haired","gloria","detect","cracks","chilly","bessie","author","vacuum","strung","sordid","phoned","flavor","diving","claude","cannon","bernie","viktor","spooky","playin","mutant","mainly","engage","cutest","condom","stoned","guinea","bridal","boards","splash","runway","messes","lecter","jeanne","gained","buckle","weekly","warmth","venice","thumbs","shitty","reform","ranger","mobile","gifted","cement","wedded","watson","voyage","verbal","trevor","stamps","slides","rigged","region","hankey","fluffy","dances","custom","bugged","sanity","sandra","newbie","moscow","meteor","hottie","gotham","ferris","faggot","ensure","closes","bosses","amends","traces","sorrow","sleazy","runner","riddle","remark","pickup","menace","formed","divide","baking","alfred","submit","picket","online","enters","devlin","bikini","stereo","steals","peyton","harass","donkey","curtis","bruise","poking","monroe","medina","doggie","crazed","carved","bundle","blanks","wrench","thingy","savior","pumped","marcie","freely","fatass","betcha","apollo","spaces","slaves","racket","insect","canned","bishop","avanya","artery","warmer","reiber","reader","raving","differ","copper","auntie","timmih","scrape","rookie","feared","colour","wolves","velvet","madman","knicks","hotels","donuts","brunch","posing","payoff","morals","kimble","herbal","hangin","clumsy","vanity","trials","stevie","regina","mugged","learns","humour","greasy","warner","sprung","smokes","scully","rivers","reduce","racist","pining","overly","locket","leland","hotter","gemini","gaines","endure","arctic","weirdo","warmed","vienna","soaked","rattle","mayday","linked","hustle","chores","callin","bricks","abused","teller","onions","lotion","lesser","jingle","infant","hazard","bakery","asylum","tuxedo","tobias","spinal","server","rabble","mailed","grieve","angelo","verify","spared","saddam","nasedo","judged","jerome","fluids","crunch","bitten","wrists","thirst","shakes","pigeon","hiking","gordie","gerald","carbon","bumper","biopsy","unpack","unload","snitch","prague","mixing","mayhem","magnet","lucien","groovy","awaits","ashton","ambush","stitch","sphere","retail","pearls","marler","grapes","dorian","voodoo","pickle","nellie","lowell","knocks","drazen","barber","argued","warped","staged","shaved","roland","radius","pushes","opener","invent","expand","enjoys","critic","ceasar","violin","vanish","tackle","safest","relive","puttin","mildly","liable","hunted","crummy","bonded","birdie","whites","quincy","nausea","melted","mashed","maiden","greece","girlie","buffet","alarms","absent","yessir","spears","quarry","poodle","morons","meters","karate","hoynes","holler","fiasco","cubans","wiggle","stains","snacks","origin","kisser","hoover","hippie","hanson","depths","carson","bypass","thighs","sought","sleaze","shells","rumour","puddle","murray","lockup","locals","lizard","junkie","hodges","herman","digest","denise","covert","chorus","bugger","uptown","tucker","trains","tickle","taping","ripley","rating","pilots","occurs","merger","forged","faults","centre","calmed","ankles","typing","steele","shades","sexist","saints","regain","raises","orphan","because","thought","nothing","believe","through","talking","getting","someone","another","looking","tonight","already","problem","exactly","without","morning","friends","telling","married","anymore","working","brother","between","minutes","feeling","promise","trouble","anybody","alright","wedding","perfect","waiting","against","husband","started","serious","finally","worried","theresa","brought","leaving","running","parents","happens","special","kidding","meeting","welcome","outside","company","mistake","totally","control","realize","picture","hundred","changed","explain","playing","michael","fucking","calling","natalie","protect","forever","besides","himself","amazing","decided","antonio","country","perhaps","darling","dollars","evening","suppose","imagine","sitting","frasier","million","charity","message","missing","careful","figured","instead","stopped","forgive","wearing","college","history","herself","deserve","richard","lindsay","staying","sweetie","mention","clothes","neither","respect","holding","keeping","putting","helping","certain","whether","present","private","jessica","station","strange","barbara","walking","captain","willing","service","knowing","somehow","killing","usually","earlier","sabrina","learned","letting","phillip","officer","support","nervous","patient","kendall","general","driving","hanging","forward","seconds","hearing","kitchen","discuss","reading","destroy","bridget","medical","charlie","jealous","weekend","matters","machine","pretend","phyllis","breathe","checked","divorce","abigail","excited","noticed","whitney","charges","witness","finding","contact","colonel","invited","dropped","obvious","goodbye","partner","dressed","whoever","rebecca","writing","turning","justice","bedroom","nikolas","reasons","doctors","charles","answers","allowed","bastard","dealing","meaning","flowers","hurting","subject","chicken","surgery","colleen","goddamn","opinion","secrets","falling","dancing","planned","vanessa","english","fifteen","america","results","nowhere","biggest","chicago","address","details","suspect","mission","further","airport","showing","project","quickly","passion","concern","natural","alcazar","tickets","kissing","suggest","defense","warning","miracle","monster","vampire","rosanna","account","clearly","wanting","allison","custody","screwed","student","stories","however","reality","grandma","changes","someday","opening","covered","harmony","records","capable","numbers","correct","teacher","frankie","ordered","growing","funeral","burning","sisters","several","written","pushing","chances","sending","healthy","engaged","percent","brandon","treated","purpose","curious","jackson","survive","offered","revenge","program","stephen","depends","fingers","process","picking","anytime","maureen","oakdale","pulling","trusted","license","sounded","stomach","mystery","regular","malcolm","frankly","baldwin","garbage","selling","setting","singing","touched","fortune","belongs","lorelai","fashion","freedom","tabitha","watched","heading","selfish","science","wasting","cartman","staring","weather","arrived","example","release","library","asshole","apology","parking","manager","chinese","russell","comfort","success","witches","hayward","ashamed","weapons","glasses","towards","travers","matthew","therapy","letters","society","managed","awesome","moments","seattle","trapped","knocked","settled","package","animals","hitting","disease","deliver","federal","crossed","fantasy","illegal","streets","freaked","begging","prepare","painful","cooking","parties","yelling","pleased","grandpa","testify","passing","choices","william","traffic","cutting","proteus","benefit","privacy","smoking","reminds","created","options","reached","laundry","accused","popular","members","mansion","sheriff","handled","senator","happier","younger","romance","section","suicide","fishing","chasing","holiday","command","winning","lawyers","escaped","routine","cookies","century","beating","warrant","awfully","article","sweater","request","manning","diamond","sharing","quality","despite","confess","harvard","unusual","dreamed","quarter","awkward","classes","assumed","dessert","rolling","closing","ancient","offense","smiling","destiny","concert","massimo","anxious","version","cleared","candles","related","jumping","silence","valerie","slipped","lucinda","blowing","session","england","classic","packing","blaming","torture","network","contest","seventy","messing","courage","enjoyed","appears","spencer","carried","intense","granted","attempt","alcohol","uniform","kristen","cleaned","enemies","roxanne","failure","highest","italian","lorelei","twisted","costume","sixteen","kicking","grabbed","clients","happily","leading","tuesday","dragged","wrapped","reports","plastic","becomes","hunting","theater","propose","honesty","soldier","lecture","windows","shocked","florida","counter","victims","stanley","channel","raising","scratch","arguing","figures","ellison","taggert","council","ability","jenkins","bermuda","actions","comment","charged","johnson","bennett","pattern","loyalty","excuses","threats","assault","praying","trained","unhappy","liberty","causing","balance","central","squeeze","perform","digging","magical","village","journey","helpful","arrange","useless","product","marlena","violent","replace","typical","current","tension","provide","express","collect","tragedy","profile","degrees","surgeon","stretch","stepped","victory","blanket","trigger","surface","proceed","worries","refused","counsel","shaking","hallway","halfway","popcorn","cameras","patrick","concept","coleman","russian","furious","approve","joining","chapter","bargain","schools","respond","remains","stefano","british","serving","jewelry","shelter","lessons","foreign","average","testing","feeding","robbery","kennedy","collins","simpson","shadows","smarter","bizarre","scaring","focused","angeles","vecchio","highway","foolish","blessed","marissa","reverse","effects","cheated","ruining","filling","cottage","grounds","wounded","massage","adopted","drawing","include","citizen","bullets","confirm","capital","strings","planted","honored","matches","crystal","mothers","monitor","couples","episode","thinkin","spirits","affairs","nuclear","leather","hostage","impress","connect","instant","recover","gesture","removed","legally","illness","dresses","vehicle","receive","psychic","melissa","teenage","judging","manners","winslow","perkins","majesty","exposed","extreme","advance","greater","wallace","needing","complex","compare","bothers","signing","landing","dignity","felicia","billion","players","operate","butters","stuffed","stavros","cameron","lunatic","designs","pumpkin","prayers","reunion","lesbian","buddies","smaller","scudder","decides","bulldog","spanish","thirsty","stewart","ringing","systems","spoiled","similar","beloved","maciver","involve","beneath","painted","crashed","naughty","shortly","devoted","auction","prevent","fathers","tearing","laughed","charmed","bowling","spotted","lighten","explode","balcony","storage","cynthia","cracked","vicious","samples","genetic","fighter","swallow","martini","wishing","stalker","gilmore","seventh","regrets","produce","dentist","anyways","tricked","buttons","entered","chamber","payback","healing","fiancée","cascade","stabbed","cabinet","lawsuit","journal","gallery","culture","closest","anthony","actress","abandon","warlock","sucking","injured","disturb","require","measure","jeffrey","whistle","massive","existed","deposit","damaged","bottles","unknown","minimum","logical","hostile","amusing","battery","breasts","strikes","houston","heavens","fooling","vincent","musical","examine","species","fragile","expense","drugged","conduct","visitor","sources","payment","hardest","demands","african","limited","lighter","shooter","quietly","denying","attacks","amnesia","backing","studies","genuine","pointed","guessed","display","closely","aspirin","academy","grissom","perfume","madison","elected","visions","studied","assured","shallow","ceiling","verdict","heather","factory","spilled","murders","workers","miranda","justify","bugging","develop","dearest","circles","mexican","claimed","rushing","bartlet","murdock","islands","welfare","theatre","succeed","relaxed","maurice","griffin","crushed","western","smelled","retired","opposed","sincere","drowned","stevens","luggage","explore","emotion","shining","camping","protest","haircut","forcing","eternal","receipt","lindsey","warrior","tracked","signals","pacific","lincoln","goddess","fiancee","kingdom","shoulda","rescued","lobster","screech","resting","primary","monkeys","compete","balloon","sailing","pockets","luckily","trailer","summers","washing","spectra","formula","efforts","chopper","content","vietnam","shirley","roberts","proving","killers","snapped","orleans","offices","madness","indians","realise","dorothy","wrecked","whipped","nearest","caitlin","blocked","risking","handing","dumping","absence","fitting","curtain","winston","freakin","detroit","willard","tabloid","nursery","distant","busting","pudding","declare","autopsy","scandal","crowded","cousins","bonding","returns","element","bradley","capture","drunken","touches","tempted","supreme","resolve","haunted","footage","arizona","affects","muscles","consult","burgers","bristow","baggage","wealthy","watches","teasing","impulse","follows","duchess","hideous","chilton","betting","bedtime","pressed","georgia","cocaine","arrives","servant","despise","cherish","carries","presume","fainted","whiskey","whacked","skating","quicker","penalty","endless","convict","whatcha","failing","essence","airline","various","pursuit","pouring","lorenzo","wonders","shotgun","ignored","exhibit","thunder","refuses","located","eastern","smashed","errands","rubbing","ratings","mcmanus","klinger","embrace","corners","whining","skipped","restore","mountie","motives","listens","cleaner","montega","hottest","emperor","beverly","worship","passage","lonigan","longest","diapers","artists","punched","catches","bearing","whisper","january","skipper","improve","electra","muffins","maximum","fiction","demonic","colored","winters","trading","terrace","suzanne","speaker","ketchup","circuit","barrett","uptight","ticking","october","doubted","crucial","bitches","arrival","visited","reserve","melanie","expects","edition","bathing","seeking","freezer","buffalo","anxiety","talents","foreman","decency","popping","peanuts","observe","largest","experts","economy","antique","retreat","profits","predict","panties","leonard","equally","grocery","freshen","consent","cartoon","biology","tobacco","ripping","phoenix","dinners","tripped","nursing","mallory","lillian","condoms","trashed","sausage","raining","needles","leaning","leaders","coolest","casting","battles","achieve","trapper","getaway","germany","freddie","counted","carlton","tougher","janitor","bidding","shorter","savings","pajamas","methods","jackass","camille","variety","traitor","physics","hammond","banging","rainbow","insight","applied","reacted","pervert","marilyn","handful","flipped","bruises","mustard","georgie","amateur","slapped","shipped","payroll","fellows","stashed","gunshot","embassy","confuse","charade","bouquet","warming","satisfy","initial","finance","caution","bicycle","writers","outcome","missile","feature","farther","easiest","thieves","sunrise","stetson","recital","closure","salvage","pumping","nations","mortals","monique","lowlife","ireland","inspire","forgave","beecher","persons","jacques","spinner","sadness","roswell","reduced","psyched","objects","indiana","engines","douglas","chewing","simpler","remarks","fulfill","ellenor","courses","blooded","advised","warrick","mirrors","locking","decades","cardiac","vanilla","utterly","tuscany","tequila","stunned","mankind","dismiss","delayed","breakup","atlanta","protein","printed","heights","choking","travels","rethink","regards","housing","hearted","teaches","desires","confide","venture","valenti","rebuild","posters","feather","despair","shaving","possess","platter","attract","shuttle","memphis","gravity","flashes","awright","lightly","lifting","kasnoff","glowing","frances","flowing","analyze","webster","reaches","pitcher","jasmine","digital","alleged","watcher","rebound","raymond","pirates","outfits","doorman","dilucca","cracker","climbed","apophis","abraham","tunnels","portion","porsche","lengths","hostess","bourbon","amongst","yankees","tactics","sherman","hopeful","francis","delight","deepest","avoided","workout","whereas","titanic","royalty","marital","lurking","lottery","ethical","elegant","customs","chopped","bedside","alvarez","secrecy","funding","contain","coconut","admired","throats","seduced","dimeras","cynical","triumph","sinking","masters","dresser","website","slammed","sarcasm","pending","partial","orderly","glimpse","gillian","execute","drivers","dispute","damages","wolfram","syringe","screams","rangers","harvest","germans","clarice","chronic","starved","gilbert","forgets","flatter","clayton","banking","advisor","tossing","thanked","neutral","maxwell","insists","flights","coroner","cologne","bailing","adebisi","trainer","marshal","dilemma","coaster","bubbles","stadium","robbing","reflect","qualify","pillows","pageant","montana","madonna","liberal","intrude","helluva","hawkeye","gregory","eleanor","tiffany","showers","sanchez","relieve","radical","overdue","lacking","hunters","context","cambias","bathtub","spiders","poverty","johnnie","hugging","horizon","fastest","carrier","beliefs","thinner","organic","matched","insults","heavily","hateful","handles","francie","doorway","beckett","batting","admiral","wrestle","idiotic","granger","corrupt","claudia","barking","sensing","convent","captive","behaved","angelus","sweeney","shampoo","preview","perjury","onboard","minding","maestro","inmates","gabriel","drastic","clearer","bruised","volcano","provoke","holland","crawled","chained","breaths","peoples","mocking","loading","drawers","conquer","clarify","cheaper","charter","chantal","butcher","barging","waffles","tribute","redhead","priests","ongoing","lindley","kidneys","grenade","fireman","faculty","catalog","breaker","blondie","torment","seminar","scenery","repairs","peaches","mcgarry","lettuce","guarded","gorilla","devices","credits","cassidy","altered","tourist","tighter","springs","solving","rosario","randall","founded","flushed","ditched","bombing","winners","suckers","spelled","rudolph","hatchet","gracias","donnell","alabama","visible","targets","spooked","pancake","marines","factors","comrade","vaguely","swamped","simmons","setback","rotting","melting","liaison","hooking","earring","dreidel","dictate","vintage","tattoos","sponsor","singles","sibling","shelley","renting","publish","planets","marries","mailbox","crooked","shoving","seizure","painter","indulge","festive","dealers","darkest","cowboys","bananas","annette","wishful","timothy","suffice","suction","slaying","rocking","puppies","oatmeal","dislike","diploma","desmond","deluded","daniels","careers","bottled","bahamas","shannon","secured","ritchie","remorse","napkins","katrina","inherit","excused","cubicle","crawley","chooses","checkup","boredom","whaddya","vitamin","schemes","pitiful","nagging","fallout","dumbass","dracula","donated","dickson","crimson","villain","roughly","rituals","pension","penguin","passive","panther","mounted","leopard","jackpot","holling","grilled","briefly","binding","vermont","tangled","stirred","sheldon","promote","precise","lucille","lookout","longing","lazarus","knights","immoral","gourmet","crosses","bygones","buzzing","burying","bernard","viewing","viewers","takeout","stating","settles","seating","seaborn","plumber","pissing","newborn","heating","gunther","caterer","carrots","bridges","vending","squared","snowing","rewrite","nipples","anything","happened","remember","together","actually","yourself","thinking","probably","whatever","supposed","business","somebody","tomorrow","everyone","daughter","question","hospital","children","possible","marriage","anywhere","straight","feelings","surprise","sheridan","involved","watching","personal","problems","starting","terrible","accident","pregnant","standing","cristian","greenlee","thousand","birthday","decision","building","evidence","finished","upstairs","possibly","security","sleeping","fighting","favorite","promised","innocent","speaking","planning","horrible","pleasure","american","courtney","pictures","position","realized","jennifer","suddenly","consider","attorney","complete","romantic","although","bringing","bathroom","honestly","interest","princess","positive","pressure","drinking","breaking","computer","chandler","continue","convince","spending","arrested","confused","whenever","michelle","believed","research","grateful","goodness","mistakes","terrific","memories","stenbeck","pathetic","checking","prepared","throwing","practice","saturday","carrying","shopping","thoughts","isabella","attitude","brothers","marrying","powerful","expected","exciting","familiar","schedule","deserves","brittany","shooting","precious","criminal","followed","strength","nicholas","greatest","behavior","gorgeous","victoria","marshall","physical","sometime","laughing","national","football","murdered","stronger","bullshit","handsome","wherever","medicine","official","contract","lifetime","painting","changing","stranger","recently","patients","original","elevator","ceremony","vacation","kristina","property","negative","fabulous","families","campaign","stealing","worrying","bleeding","students","shoulder","training","meantime","laurence","messages","somethin","midnight","distance","basement","sentence","universe","reaction","magazine","thrilled","buchanan","entirely","counting","cleaning","charming","language","becoming","terribly","friendly","stopping","disaster","attacked","presents","argument","homework","accepted","generous","director","separate","enjoying","caroline","baseball","offering","progress","military","learning","exchange","betrayed","sticking","studying","llanview","believes","solution","material","audience","dropping","district","sandwich","treating","specific","assuming","judgment","divorced","mountain","listened","answered","dreaming","covering","cheating","thursday","millions","vampires","released","murderer","margaret","admitted","prisoner","delivery","freezing","partners","presence","holidays","survived","occasion","nonsense","downtown","internet","obsessed","location","directly","freaking","touching","recovery","standard","officers","returned","violence","relieved","approach","normally","threaten","teaching","incident","headache","opposite","visiting","received","describe","cordelia","starving","deserved","williams","election","roommate","arranged","services","promises","transfer","response","identity","waitress","catalina","annoying","sergeant","davidson","creature","paranoid","handling","reporter","priority","pleasant","samantha","guessing","swimming","switched","neighbor","hundreds","exercise","patience","sandburg","eighteen","everyday","compared","wondered","attached","proposal","fourteen","darkness","reminded","emotions","stubborn","designed","suffered","designer","occurred","accusing","bothered","concerns","symptoms","ordinary","imagined","memorial","japanese","avoiding","boarding","minister","governor","catching","absolute","strictly","sneaking","internal","adorable","audition","helpless","explains","valuable","creative","talented","mistaken","customer","activity","reverend","bastards","canadian","intended","supplies","instance","politics","sympathy","entrance","employee","bracelet","thirteen","facility","tracking","garrison","borrowed","meetings","insisted","grandson","teenager","strategy","eternity","happiest","discover","constant","entitled","disagree","suspects","paradise","teachers","knocking","superior","homeless","critical","producer","instinct","soldiers","champion","treasure","inviting","cocktail","intimate","informed","dressing","blessing","alistair","atlantic","division","complain","visitors","graduate","trusting","reynolds","properly","canceled","reaching","pancakes","troubles","proposed","identify","clothing","miracles","contrary","allergic","stalking","forgiven","approval","industry","dragging","pointing","portrait","jealousy","hopeless","scenario","necklace","homicide","diamonds","appetite","vanquish","function","bachelor","struggle","slightly","lipstick","belonged","affected","accounts","strongly","invented","announce","screwing","salesman","lakeview","insanity","document","entering","punished","dramatic","quarters","semester","machines","delicate","adoption","sickness","floating","envelope","sunshine","potatoes","franklin","capeside","crossing","required","ordering","monsters","grounded","electric","conflict","enormous","distract","crawling","congress","flirting","ultimate","maintain","survival","spellman","benjamin","peaceful","citizens","weakness","movement","executed","assigned","suitcase","inspired","insecure","starters","guardian","cummings","confront","register","arrogant","catholic","rational","passport","advanced","weddings","reported","drowning","contacts","thanking","thankful","replaced","nineteen","analysis","stressed","requires","rejected","anderson","benefits","wardrobe","airplane","multiple","harmless","alliance","guidance","courtesy","terrance","involves","barbecue","spinning","brooklyn","gathered","freshman","chemical","virginia","mckinnon","highness","somewhat","realizes","faithful","hannibal","gambling","ignoring","accurate","religion","crashing","jonathan","festival","chairman","stargate","respects","operator","includes","relative","pressing","glorious","previous","michigan","kindness","robinson","mattress","cemetery","elephant","provided","indicate","forehead","appeared","seinfeld","quitting","daylight","mistress","implying","offended","infected","humanity","calendar","warlocks","domestic","terminal","earrings","deadline","corporal","figuring","included","choosing","betrayal","reminder","monsieur","injuries","illusion","distress","creating","chickens","tortured","lancelot","addition","modeling","panicked","products","climbing","approved","veronica","majority","kiriakis","insulted","driveway","deserted","definite","searched","nickname","lighting","costanza","poisoned","intruder","harrison","tolerate","stepping","southern","increase","hostages","hardware","troubled","sweetest","stations","postpone","charging","revealed","costumes","captured","bluffing","thompson","splendid","shouting","grieving","disorder","resident","lawrence","european","briefing","assholes","sounding","servants","elements","allright","allowing","shepherd","reliable","mitchell","unlikely","shutting","overcome","claiming","yearbook","triangle","tempting","november","thorough","reckless","railroad","exposure","contempt","capacity","weekends","shipment","scissors","matching","hormones","compound","sexually","carriage","slipping","sweating","controls","stunning","shipping","hastings","gracious","abortion","theories","plotting","mattered","hamilton","projects","concrete","columbia","backyard","academic","sabotage","measures","illinois","articles","broadway","strangle","purchase","clearing","civilian","boutique","opinions","examined","secretly","mentally","chambers","stalling","destined","fugitive","discount","stinking","sessions","resolved","remotely","protocol","uniforms","donation","disguise","balloons","landlord","hesitate","focusing","babbling","stranded","smartest","paycheck","mechanic","juvenile","drucilla","disposal","caffeine","vanished","syndrome","missiles","isolated","expenses","immature","husbands","granddad","detector","almighty","swinging","gretchen","cracking","superman","snooping","pentagon","leverage","clueless","clarence","arriving","richards","improved","violated","traveled","occupied","invested","twisting","settling","purposes","grabbing","stripper","ruthless","recorded","mourning","fountain","dreadful","doorstep","noticing","february","december","cleaners","relaxing","channels","category","blocking","blankets","addicted","greeting","declared","cadillac","backpack","agreeing","starling","likewise","colorado","surgical","marching","immunity","frighten","comments","carlotta","campbell","ambition","unstable","refusing","petition","devotion","deciding","twilight","screamed","scotland","russians","relevant","pounding","farewell","curtains","carnival","recorder","survivor","smelling","premises","khasinau","software","shocking","marianne","childish","reserved","opponent","abducted","spelling","punching","marathon","lawndale","initials","deceased","careless","precinct","persuade","patterns","mcintyre","llanfair","educated","disgrace","coverage","corridor","werewolf","sidewalk","sensible","overtime","jeopardy","distinct","directed","cautious","subjects","parallel","northern","intimacy","exploded","defended","crackers","wildwind","sketches","solitary","reacting","pursuing","mortgage","wrapping","realised","partying","employer","cinnamon","assassin","antidote","sequence","rambaldi","programs","madeline","equation","centered","dynamite","discreet","catering","stitches","referred","matthews","deveraux","consumed","blizzard","specials","prettier","paranoia","behaving","anyplace","stuffing","speeding","payments","musician","magician","leonardo","interior","equipped","collapse","youngest","selfless","santiago","restless","metaphor","meltdown","incoming","gasoline","episodes","comedian","assembly","umbrella","tropical","slippery","luckiest","hartford","francine","corleone","promoted","plumbing","lingerie","everwood","creation","bulletin","bouncing","platform","packages","carolina","tendency","symphony","startled","lorraine","economic","sniffing","sedative","reversed","nowadays","invasion","flipping","dumpster","souvenir","lockdown","extended","diseases","wandered","publicly","lemonade","heavenly","engineer","employed","cheering","speeches","smashing","gardener","drooling","acquired","spitting","receipts","preserve","portland","pictured","feminine","eyeballs","vendetta","suspense","summoned","produced","laughter","dinosaur","weirdest","swelling","steroids","sentinel","rehearse","prophecy","mercedes","immortal","einstein","chatting","buckaroo","bedrooms","tutoring","subpoena","requests","flexible","combined","applause","wretched","smoothly","pleading","organize","ignorant","flashing","doughnut","stumbled","parental","estimate","database","danielle","cartoons","apparent","tabloids","schwartz","preacher","password","hovering","cultures","ambrosia","stripped","strapped","skipping","profound","forensic","espresso","comeback","blushing","wrecking","scheming","rescuing","postcard","peterman","overseas","morphine","lectures","attempts","applying","warriors","tripping","stirring","sorority","sneakers","republic","override","doorbell","cultural","commerce","annulled","telegram","suitable","specimen","pharmacy","notified","escaping","billions","bankrupt","retrieve","neurotic","monitors","martinez","lydecker","doubting","crawford","chauncey","cellular","tomatoes","thatcher","suggests","showtime","reassure","mystical","headline","gangster","dispatch","detailed","bragging","aircraft","adjusted","sunlight","stabbing","slippers","secondly","prospect","phillips","felicity","expelled","blackout","backfire","vitamins","tourists","restored","peculiar","parasite","fearless","dashwood","contents","steering","pitching","oklahoma","notebook","mornings","horribly","feathers","eyebrows","dialogue","boragora","agitated","withdraw","vehicles","sporting","nauseous","mcmillan","jennings","frequent","decorate","twenties","surgeons","outsider","holdings","drifting","damaging","colleges","bandages","athletic","absorbed","starring","stanford","serenity","martinis","inclined","florence","colorful","brochure","artistic","weighing","striking","overhear","morality","gardiner","confirms","breeding","ulterior","softball","smallest","maternal","guarding","fighters","features","columbus","attended","sweeping","resigned","lebowski","injected","something","beautiful","important","everybody","different","sometimes","wonderful","christmas","president","certainly","questions","obviously","somewhere","situation","happening","apartment","boyfriend","wondering","concerned","attention","surprised","yesterday","listening","dangerous","gentlemen","difficult","seriously","beginning","elizabeth","afternoon","apologize","detective","breakfast","perfectly","ourselves","otherwise","excellent","emergency","condition","expecting","necessary","someplace","following","desperate","mentioned","champagne","happiness","convinced","according","celebrate","brilliant","forrester","advantage","stephanie","including","forgotten","destroyed","professor","chocolate","miserable","corinthos","nightmare","character","recognize","operation","available","statement","fantastic","breathing","interview","assistant","community","basically","disappear","insurance","guarantee","committed","screaming","honeymoon","sensitive","spaulding","bothering","connected","interrupt","treatment","alexandra","emotional","decisions","extremely","expensive","kidnapped","impressed","suffering","christine","introduce","knowledge","hopefully","direction","gentleman","secretary","halloween","agreement","ambulance","challenge","procedure","goodnight","potential","newspaper","delicious","mackenzie","answering","pregnancy","hollywood","influence","gabrielle","americans","education","commander","underwear","exhausted","believing","carefully","committee","intention","sacrifice","attracted","testimony","defending","political","surprises","terrified","satisfied","counselor","equipment","naturally","thousands","temporary","witnesses","instincts","strangers","authority","abandoned","delivered","literally","explained","interests","telephone","reception","tradition","customers","therapist","warehouse","inspector","permanent","financial","rappaport","childhood","katherine","discussed","searching","depressed","daughters","neighbors","annulment","represent","adventure","protected","paperwork","overnight","meanwhile","cassadine","therefore","confident","suggested","furniture","signature","convicted","blackmail","cigarette","explosion","interfere","penthouse","constable","shoulders","objection","christina","courtroom","confusing","francisco","wednesday","corporate","confessed","seventeen","principal","recommend","separated","executive","traveling","backwards","rehearsal","overheard","catherine","developed","bartender","referring","personnel","fashioned","upsetting","scheduled","invisible","territory","messenger","lightning","confirmed","remembers","frederick","returning","mountains","manhattan","effective","flattered","existence","favourite","computers","practical","organized","volunteer","satellite","videotape","jefferson","cooperate","integrity","suspected","qualified","immediate","companies","cafeteria","precisely","obsession","infection","chemistry","publicity","employees","conscious","defendant","religious","dismissed","criminals","anonymous","regarding","magazines","surrender","pretended","wrestling","privilege","disturbed","associate","honorable","breakdown","attempted","worthless","standards","resources","briefcase","embarrass","prisoners","documents","operating","forensics","attacking","manticore","imagining","accepting","heartbeat","hurricane","slightest","paternity","generally","creatures","teenagers","respected","recovered","halliwell","objective","residence","vengeance","curiosity","sunnydale","psychotic","scientist","apologies","finishing","gratitude","wandering","determine","cosmetics","accidents","reporting","reference","preparing","fireworks","contacted","righteous","affection","exclusive","reminding","creations","continues","cancelled","reporters","candidate","australia","admitting","requested","described","dedicated","christian","centuries","marvelous","defensive","cortlandt","alexander","innocence","encourage","delighted","currently","relatives","promotion","broadcast","violation","suspended","promising","gathering","exception","collapsed","lifestyle","insulting","detention","principle","confusion","execution","correctly","complaint","charlotte","structure","pointless","household","fortunate","transport","technical","suspicion","graduated","hospitals","goddamnit","dimension","negotiate","fantasies","demanding","valentine","depending","autograph","probation","performed","identical","torturing","qualities","malkovich","celebrity","policeman","offensive","hypocrite","humiliate","alcoholic","vegetable","spreading","eliminate","technique","paralyzed","batteries","harassing","elsewhere","spiritual","recording","diagnosis","possessed","countries","evidently","godfather","establish","contracts","worldwide","marketing","handcuffs","discovery","attending","headaches","receiving","cristobel","forgiving","sebastian","physician","perimeter","encounter","strongest","september","caribbean","obnoxious","substance","buildings","relations","published","rejection","realizing","deception","classroom","appointed","paintings","clearance","bodyguard","terrorist","continued","realistic","hourglass","repeating","arguments","colleague","belthazor","attorneys","poisoning","specialty","passenger","forbidden","communist","arresting","inventory","amendment","traumatic","overboard","witnessed","pronounce","presented","marriages","fireplace","expertise","splitting","exquisite","thornhart","sustained","shattered","marijuana","involving","entertain","announced","stressful","addiction","hampshire","elaborate","completed","positions","hamburger","cleveland","radiation","favorites","conceived","backstage","strangely","proposing","goddamned","directors","wisconsin","sweetness","alternate","switching","swallowed","civilized","motivated","microwave","francesca","sentenced","blessings","privately","heartless","admission","extension","remaining","murdering","democracy","bookstore","abilities","punishing","occasions","obsessing","injection","hilarious","scarecrow","prosecute","misplaced","efficient","ambitious","virtually","premature","priceless","moonlight","insisting","generator","ballistic","allowance","adjourned","roommates","inherited","incapable","hostility","goddammit","sarcastic","institute","heartache","protector","discharge","automatic","spaghetti","powerless","instantly","doughnuts","diversion","companion","accessory","translate","imaginary","greetings","fairwinds","succeeded","sophomore","collected","ancestors","parenting","graveyard","footsteps","essential","departure","chauffeur","supported","strangest","selection","primitive","obsessive","murderers","consulate","inspiring","impulsive","affecting","screening","scratched","operative","betraying","appealing","obligated","carpenter","neglected","indicates","cassandra","addressed","purchased","officials","kidnapper","postponed","groceries","frequency","willingly","justified","increased","enlighten","architect","alongside","restraint","apologise","poisonous","comparing","armstrong","survivors","spotlight","sentences","roosevelt","revealing","louisiana","impatient","diagnosed","contained","condemned","troubling","scrambled","limousine","investors","democrats","wentworth","virginity","uninvited","strangled","responded","residents","judgement","installed","glamorous","delusions","competent","superhero","pneumonia","extensive","exploring","exercises","chinatown","chemicals","baltimore","authentic","allergies","publisher","obstacles","josephine","genuinely","decorated","criticism","ultimatum","releasing","predicted","competing","butterfly","universal","providing","mysteries","matrimony","liability","explosive","assaulted","undermine","sincerely","materials","headlines","dependent","cocktails","blueberry","backfired","adjusting","activated","uncertain","magically","lovebirds","listeners","informant","dinosaurs","designing","testified","stability","auditions","singapore","prettiest","newlyweds","misguided","fisherman","elephants","surviving","stupidity","salvation","princeton","northwest","mechanism","greatness","delirious","cristobal","compelled","certified","prognosis","molecular","functions","continent","behaviour","welcoming","secondary","preferred","orchestra","handshake","formality","elevators","civilians","boathouse","remarried","reluctant","regularly","memorable","librarian","extortion","expressed","downright","doolittle","cranberry","pepperoni","ownership","mandatory","ludicrous","deceiving","tribbiani","scattered","sanctuary","regretted","misjudged","everything","understand","absolutely","completely","sweetheart","appreciate","especially","definitely","interested","girlfriend","difference","ridiculous","apparently","experience","incredible","department","impossible","government","restaurant","everywhere","themselves","connection","personally","downstairs","eventually","television","remembered","lieutenant","protecting","friendship","threatened","understood","particular","pretending","permission","protection","conference","engagement","attractive","incredibly","disgusting","washington","california","confession","impression","reputation","montgomery","yourselves","suspicious","confidence","determined","successful","considered","commitment","discovered","officially","discussion","university","assignment","medication","suggesting","vulnerable","reasonable","conscience","invitation","frightened","kidnapping","collection","forgetting","impressive","discussing","commercial","basketball","underneath","biological","mysterious","background","afterwards","punishment","surrounded","disappoint","supportive","physically","suggestion","distracted","compliment","wheelchair","protective","expression","devastated","straighten","convenient","technology","whatsoever","constantly","motorcycle","convincing","production","compromise","cigarettes","conditions","transplant","appearance","experiment","commission","foundation","unexpected","undercover","destroying","conspiracy","thoughtful","sandwiches","investment","possession","conclusion","helicopter","fitzgerald","excitement","accomplish","supposedly","intentions","compassion","management","directions","explaining","generation","photograph","remarkable","passionate","introduced","graduation","disturbing","situations","recognized","practicing","individual","operations","legitimate","humiliated","throughout","detectives","comforting","registered","frustrated","convention","attraction","obligation","regardless","inevitable","settlement","surprising","nightmares","whispering","reconsider","courthouse","assistance","apologized","newspapers","activities","visitation","depression","aggressive","retirement","electrical","harassment","controlled","unpleasant","priorities","depressing","delusional","specialist","scientific","manipulate","delightful","industries","definition","struggling","fleischman","counseling","recovering","psychology","identified","homecoming","philosophy","substitute","hysterical","ultimately","millennium","babysitter","questioned","outrageous","originally","conviction","characters","associates","boyfriends","suspicions","chancellor","statements","republican","guaranteed","discipline","atmosphere","importance","separation","positively","responding","ambassador","population","eyewitness","enthusiasm","colleagues","terrorists","performing","barrington","terrifying","reflection","supporting","accomplice","accountant","altogether","tremendous","profession","encouraged","toothbrush","represents","leadership","unfinished","flattering","delivering","tournament","vegetables","revolution","principles","perfection","interviews","initiative","employment","rendezvous","jeopardize","ungrateful","irrational","classified","prostitute","developing","committing","literature","disappears","concussion","scientists","reschedule","disrespect","complaints","earthquake","cappuccino","transition","sacrificed","concerning","collecting","supervisor","sacrifices","irrelevant","challenged","productive","meaningful","pressuring","despicable","difficulty","hallelujah","fraternity","additional","acceptable","passengers","occasional","indication","flashlight","resistance","instrument","historical","comparison","suspension","resolution","accusation","witchcraft","paramedics","accounting","references","guarantees","deposition","optimistic","wilderness","vindictive","democratic","ammunition","thoroughly","refreshing","membership","boundaries","journalist","acquainted","explosives","confronted","procedures","industrial","fundraiser","playground","jacqueline","evaluation","journalism","consistent","cinderella","challenges","authorized","assumption","underworld","adjustment","acceptance","volunteers","temptation","courageous","unemployed","testifying","mentioning","publishing","programmed","homosexual","consultant","apartments","psychopath","proportion","electronic","confessing","attempting","stepfather","presidents","instructed","diplomatic","contagious","approached","loneliness","forresters","continuing","motivation","scratching","privileges","intriguing","bridesmaid","sufficient","pittsburgh","laboratory","generosity","chocolates","elementary","worthwhile","sentencing","unfaithful","underwater","discretion","williamson","treatments","intimidate","instructor","vegetarian","satisfying","requesting","grandchild","contribute","connecting","ultrasound","reassuring","properties","microphone","mechanical","dedication","ventilator","strawberry","persuasive","lighthouse","cassadines","adolescent","precaution","decorating","cocksucker","believable","willoughby","paddington","repeatedly","dictionary","consulting","associated","adventures","unbearable","judgmental","fascinated","traditions","preferably","candidates","automobile","windshield","sunglasses","relatively","prosecutor","persistent","perception","percentage","irritating","commanding","bargaining","vanquished","resentment","landingham","accidental","westbridge","popularity","perceptive","miraculous","inspection","casualties","stepmother","expressing","businesses","processing","information","interesting","responsible","opportunity","comfortable","complicated","grandfather","grandmother","practically","immediately","appointment","considering","disappeared","explanation","possibility","concentrate","embarrassed","threatening","coincidence","anniversary","competition","technically","performance","personality","necessarily","imagination","appropriate","understands","questioning","fascinating","differently","unconscious","underground","celebrating","celebration","perspective","springfield","remembering","complaining","arrangement","authorities","description","premonition","intelligent","desperately","forgiveness","temperature","alternative","enchantment","emotionally","unfortunate","experienced","independent","environment","christopher","restraining","reservation","traditional","combination","application","photographs","conclusions","transferred","fortunately","differences","connections","humiliating","destruction","shakespeare","permanently","girlfriends","maintenance","insensitive","interrupted","significant","communicate","development","switzerland","accusations","controlling","cooperation","investigate","inspiration","frightening","destructive","magnificent","scholarship","importantly","enterprises","certificate","electricity","distraction","observation","institution","coffeehouse","apologizing","involvement","humiliation","appreciated","frustrating","established","suggestions","invitations","spontaneous","spectacular","encouraging","association","overwhelmed","experiences","sonofabitch","corporation","handwriting","acknowledge","prosecution","partnership","psychiatric","meaningless","compromised","proposition","sentimental","manipulated","cheerleader","unnecessary","interfering","preliminary","outstanding","congressman","volunteered","restaurants","enforcement","competitive","businessman","advertising","consolation","replacement","overreacted","whereabouts","compliments","examination","beautifully","approaching","sympathetic","recommended","connecticut","improvement","appreciates","preoccupied","predictable","experiments","convenience","intimidated","generations","temporarily","respectable","statesville","christening","antibiotics","trespassing","challenging","inheritance","distracting","commercials","merchandise","resignation","resemblance","blackmailed","documentary","considerate","credibility","credentials","babysitting","programming","diefenbaker","regulations","housekeeper","fingernails","assignments","obstruction","appearances","supermarket","convertible","incompetent","sensitivity","quarterback","decorations","demonstrate","superficial","participate","republicans","represented","recognition","ingredients","vanquishing","interviewed","devastating","orientation","limitations","genetically","engineering","declaration","frustration","arraignment","negotiating","millionaire","voluntarily","schillinger","condolences","proceedings","preparation","nonetheless","coordinates","anticipated","surrounding","substantial","mississippi","desperation","introducing","individuals","unavailable","trustworthy","translation","photography","operational","transparent","potentially","masterpiece","educational","destination","functioning","impressions","essentially","transmitter","celebrities","speculation","relationship","conversation","professional","thanksgiving","unbelievable","disappointed","neighborhood","embarrassing","quartermaine","particularly","consequences","psychiatrist","commissioner","intelligence","surveillance","arrangements","interrupting","instructions","motherfucker","construction","specifically","accidentally","accomplished","fingerprints","announcement","organization","deliberately","reservations","independence","overreacting","photographer","expectations","prescription","congratulate","headquarters","refrigerator","satisfaction","confidential","blackmailing","investigator","occasionally","presentation","representing","overwhelming","entertaining","interference","civilization","whitelighter","disappearing","pennsylvania","jurisdiction","constitution","appreciation","philadelphia","manipulative","appointments","grandparents","unacceptable","premonitions","experiencing","confirmation","experimental","championship","superstition","supernatural","presidential","unbelievably","registration","manipulating","frankenstein","contribution","breakthrough","subconscious","irresistible","transmission","kindergarten","straightened","exaggerating","unforgivable","nevertheless","conditioning","unreasonable","introduction","difficulties","acquaintance","intervention","interviewing","enthusiastic","cheerleaders","intellectual","indefinitely","commonwealth","manslaughter","explanations","distractions","disconnected","conveniently","contractions","surprisingly","psychologist","negotiations","transferring","applications","unfortunately","investigation","circumstances","understanding","uncomfortable","relationships","international","entertainment","extraordinary","investigating","inappropriate","granddaughter","possibilities","misunderstood","communication","underestimate","sophisticated","complications","conversations","consideration","consciousness","disappearance","interrogation","psychological","opportunities","irresponsible","grandchildren","quartermaines","automatically","approximately","embarrassment","professionals","compassionate","intentionally","establishment","determination","eavesdropping","personalities","environmental","assassination","unpredictable","inconvenience","morgendorffer","disappointing","communicating","misunderstand","concentration","incriminating","encouragement","hallucinating","authorization","neighbourhood","concentrating","responsibility","understandable","disappointment","communications","recommendation","administration","understatement","professionally","transportation","overprotective","identification","representative","underestimated","investigations","hypothetically","congratulations","confidentiality","misunderstanding","responsibilities"];
	// good API design - allow for defaults if they make sense, don't fail unexpectedly
	if (typeof(num_words) == 'undefined') {
		num_words = 4;
	}
	var words = '';
	var array = new Uint32Array(parseInt(num_words));
	var cryptoObj = window.crypto || window.msCrypto; 

	random = cryptoObj.getRandomValues(array);

	for (var i = 0; i < num_words; ++i) {

		w = wordDB[Math.floor(random[i]/Math.pow(2,32) * wordDB.length)];
		if (w.length < min_word_length) {
			--i;
			continue;
		}
	  words += w + ' ';
	}
	words = words.trim();

	return words;
};

var WIFToAddress = function(pkey) {
	console.log(pkey)
	return Bitcoin.ECPair.fromWIF(pkey).getAddress().toString();
};
var WIFToPubKey = function(pkey) {

	return Bitcoin.ECPair.fromWIF(pkey).getPublicKeyBuffer().toString('hex');
};
var WIFToPkey = function(WIF) {
	return Bitcoin.ECPair.fromWIF(WIF);
};
var scriptToAddress = function(script) {
	return Bitcoin.address.fromOutputScript(script).toString()
};

revertHash = function(s) {
	var newHash = ''
		for (var i = 0; i <=s.length-2; i=i+2) {
			newHash = ((s.substring(i,i+2)) + newHash);
		}
	return newHash
};

var warp = function(hook, passphrase, salt, def){
	var master = this;
	var saveWarp = function(res) {
		def.resolve(res.private);
	};
	var hook = hook || function(){};
	var callback = callback || function(){console.log('finished')};
	var params = { 
		"N"        : 18,
		"p"        : 1,
		"r"        : 4,
		"dkLen"    : 16,
		"pbkdf2c"  : 8192
	};
    
	warpwallet.run({
	passphrase: passphrase,
	salt: salt,
	progress_hook: hook,
	params: params},
	saveWarp)
};

var VaultView = Backbone.View.extend({
	el: $('#vault'),
	template: _.template($('#vault-template').text()),
	events:{
		'slidestop .flip-min': 'generate',
		'click .random-word': 'addRandomWord',
		'keydown .passphrase': 'adjustPassphraseSize',
		'keydown .salt': 'adjustPassphraseSize',
		'click .randomize-words': 'randomizeWords',
		'click .save-address': 'saveAddress'
	},
	stat: '',

	saveAddress: function() {

		//window.localStorage.setItem('data')
	},
	randomizeWords: function() {
		var master = this;
		var passphrase = $('.passphrase').val();
		$('.passphrase').val('');
		_.each(Array(passphrase.split(' ').length - 1), function(a, b) {
			master.addRandomWord();
		})
	},
	addRandomWord: function() {
		$('.passphrase').val( $('.passphrase').val() + ' ' + randomWords(1) );
		this.adjustPassphraseSize();

	},
	adjustPassphraseSize: function() {
		var maxWidth = $('.passphrase').width() / 10;
		if ($('.passphrase').val().length > maxWidth) {
			$('.passphrase').css('font-size','12px')
		}
		if ($('.passphrase').val().length < maxWidth) {
			$('.passphrase').css('font-size','18px')
		}
		if ($('.salt').val().length > maxWidth) {
			$('.salt').css('font-size','12px')
		}
		if ($('.salt').val().length < maxWidth) {
			$('.salt').css('font-size','18px')
		}
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	showQRCodes: function() {
		try {
			var qrPkey = new QRCode("qrcode-pkey", {width: 160, height: 160,correctLevel : QRCode.CorrectLevel.L, colorDark : 'black'});
			var qrPubkey = new QRCode("qrcode-pubkey", {width: 160, height: 160,correctLevel : QRCode.CorrectLevel.L, colorDark : 'black'});
			var qrAddress = new QRCode("qrcode-address", {width: 160, height: 160,correctLevel : QRCode.CorrectLevel.L, colorDark : 'black'});
			qrPkey.makeCode(this.model.get('WIF'));
			qrPubkey.makeCode(this.model.publicKey());
			qrAddress.makeCode(this.model.address());

			$('.label-address').val(this.model.address());
			$('.label-pubkey').val(this.model.publicKey());
			$('.label-pkey').val(this.model.get('WIF'));
			$('canvas').css({
				'position': 'absolute',
				'margin-left': '8%',
				'margin-right': '8%',
				'width': '70%',
				'vertical-align': 'middle',
				'background':'default', 
				'border': '8px solid #FFFFFF', 
				'color': '#000000', 
				'title': 'Details',
				'hide': { effect: "fade", duration: 2000 }
			});
			$('.qrcode').css('display','block');
			$('.qrcode').css('height', 0.7 * $('body').width() + 'px');
			$('.qrcodes').css('display','block');
		} catch(err){
            console.log(err);
        }
	},
	generate: function() {
		console.log(this.stat)
		if ($('.flip-min').val() == 'off') {
			if (this.stat = 'calculating') {
				window.location.reload()
			} else {
				return
			}
		} else {
			if (this.stat == 'calculating') {
				console.log('returning')
				return
			}
		}

		if (typeof warpwallet == 'undefined'){
			$('body').append('<script type="text/javascript" src="js/warpwallet.js"></script>\
			<script type="text/javascript" src="js/bitcoinjs.min.js"></script>');
		}

		var master = this;

		$('.ui-slider-label', this.el).css('background-color','red');

		var hook = function(pct) {
			var value = (Math.floor(100 * (((pct.what == 'pbkdf2' ? 524288 : 0) + pct.i) / (524288 + 65536))) );
			$('#progressbar').progressbar({
				value: value
			});
			$('.ui-slider-label').html(value + ' %')
		}

		this.stat = 'calculating'
		var def = $.Deferred();
		
		warp(hook, $('.passphrase').val() , $('.salt').val(), def)
		def.done(function(wif){
            console.log('drawing')
			$('.ui-slider-label', this.el).css('background-color','default');
			master.model.set('WIF', wif);
			master.showQRCodes();
		})
	}
});

var signView = Backbone.View.extend({
	el: $('#sign'),
	template: _.template($('#sign-template').text()),
	events:{
		'click .btn-scan-raw-tx' : 'scanRawTx',
		'click .btn-enter-pkey' : 'enterPkey',
		'click .btn-scan-pkey' : 'scanPkey',
		'click .btn-divid-qrcode' : 'dividQrCode',
		'click .btn-divid-qrcode-more' : 'dividQrCodeMore',
		'click .btn-original-qr-size' : 'originalQrSize'
	},
	originalQrSize: function(){
		this.checkAndDrawQr();
	},
	dividQrCode: function(z){
		this.checkAndDrawQr(1000);
	},

	dividQrCodeMore: function(z){
		this.checkAndDrawQr(300);
	},

	render: function() {
		this.$el.html(this.template(this.model.data()));
		return this;
	},

	checkAndDrawQr: function(maxLen) {
		$('#qrcode-transaction').empty()
		function chunkString(str, length) {
			return str.match(new RegExp('.{1,' + length + '}', 'g'));
		}
		var maxLen = maxLen || 2000
		if (this.model.get('rawTx') && this.model.get('wif')) {
			qrNumber = Math.ceil(this.model.get('rawTx').length / maxLen);
			var rawTx = this.model.signRawTx().raw;
			qrData = chunkString(rawTx, Math.ceil(rawTx.length / qrNumber));
			var master = this;
			var maxWidth = $('body').width() * 0.95;
			_.each(qrData, function(a, i){
				$("#qrcode-transaction").append('<div id="qrcode-transaction' + i + '"></div>');
				var qrTx = new QRCode("qrcode-transaction" + i, {width: maxWidth, height: maxWidth,correctLevel : QRCode.CorrectLevel.L, colorDark : 'black'});
				$('#qrcode-transaction' + i +' > canvas').css({
					'position': 'relative',
					'margin-left': '2%',
					'margin-right': '2%',
					'margin-bottom': '20%',
					'margin-bottom': '20%',
					'width': '90%',
					//'vertical-align': 'middle',
					'background':'default', 
					'border': '8px solid #FFFFFF', 
					'color': '#000000', 
					'title': 'Details',
					'hide': { effect: "fade", duration: 2000 }
				});
				qrTx.makeCode(a);
				$('#qrcode-transaction' + i).css('height',maxWidth*0.95 + 'px').css('margin-bottom','30px').css('margin-top','30px')
			})
			$('#qrcode-transaction').css('height',maxWidth*0.95 + 'px')
			if(qrData[0].length > 1000) {
				$('#qrcode-transaction').append('<li class="ui-first-child" style="margin-top:20px">\
					<a href="" data-role="button" data-transition="slide" class="btn-divid-qrcode ui-btn ui-icon-carat-r ui-btn-icon-right">Chunk in multiple QRCodes</a>\
				</li>');
				return
			}

			if(qrData[0].length > 500) {
				$('#qrcode-transaction').append('<li class="ui-first-child" style="margin-top:20px">\
					<a href="" data-role="button" data-transition="slide" class="btn-divid-qrcode-more ui-btn ui-icon-carat-r ui-btn-icon-right">Chunk in even smaller QRCodes</a>\
				</li>');
				return
			}

			$('#qrcode-transaction').append('<li class="ui-first-child" style="margin-top:20px">\
				<a href="" data-role="button" data-transition="slide" class="btn-original-qr-size ui-btn ui-icon-carat-r ui-btn-icon-right">Back to original small size</a>\
			</li>');
			
		}
	},

	enterPkey: function() {
		var master = this;
		var passphrase = window.prompt('Enter your warp passphrase');
		if (!passphrase) {return}
		try {
			Bitcoin.ECPair.fromWIF(passphrase);
			master.model.set('wif', passphrase);
			master.model.signRawTx();
			master.checkAndDrawQr();
			return
		} catch(err) {
			console.log('Its not a pkey, so it must be a warpwallet')
		}
		var salt = window.prompt('Enter your warp salt');
		var def = $.Deferred();
		$('.calculation').css('display','block');

		var hook = function(pct){
			var value = (Math.floor(100 * (((pct.what == 'pbkdf2' ? 524288 : 0) + pct.i) / (524288 + 65536))) );
			$('.calculation').html(value + ' %')
		}
		var def = $.Deferred();
		warp(hook, passphrase , salt, def)
		def.done(function(wif){
			master.model.set('wif', wif);
            console.log(wif)
			master.model.signRawTx();
			//this.model.set('wif','5JMTtVLuW1v81dqK15ftgmRY5fSKUAFp1iX94KqN1MdZpYTS5uJ')
			master.checkAndDrawQr();
		})
	},

	scanRawTx: function(chunks) {
		chunks = chunks || []
		var master = this;
		var result = {}

		//try{
		//cordova.plugins.barcodeScanner.scan(
		//	function (result) {
		result['text'] = '01000000015526d0b27270d70c92eec20d12781853dc6354af725e9054c2262dc3d551037d000000001976a91484895ea08614b612beaf15701664bec5c9ecca1588acffffffff0190435900000000001976a91484895ea08614b612beaf15701664bec5c9ecca1588ac00000000'
				if (result.text.indexOf(':') > -1){
					chunks[result.text.split(':')[0]] = result.text.split(':')[1]
					try {
						Bitcoin.Transaction.fromHex(chunks.join(''));
						result.text = chunks.join('');
					} catch(err) {
						window.alert('Transaction incomplete, click OK to continue scanning');
						master.scanRawTx(chunks)
					}
				}
				try {

					var txh = Bitcoin.Transaction.fromHex(result.text)
					_.each(txh.ins,function(a, b){
						a.script.chunks = [];
						a.script.buffer = [];
					})
				} catch(err) {
					alert("QRcode doesnt seem valid, try again...");
					return
				}

				master.model.set('rawTx', result.text);


				var txb = Bitcoin.TransactionBuilder.fromTransaction(txh);
				txb.inputs = txb.inputs.map(function(a, i){ return typeof(a.hashType)=='undefined' ? {} : a});
				$('.outputs').append('Outputs :</br>')
				_.each(master.model.outputs(),function(a, b){
					$('.outputs').append('<div style="padding-left:20px"> ' + a.address + ' : ' + ( a.value / 100000000 ) + '</div>')
				})
				$('.outputs').append('Total : ' + _.reduce(master.model.outputs(), function(a, b) { return a + b.value}, 0) / 100000000)
				master.checkAndDrawQr();
		/*	}, 
			function (error) {
				alert("QRcode doesnt seem valid, try again...");
			})
		} catch(err){
			window.alert(err);
		}*/
	},

	scanPkey: function() {
		var master = this;
		//cordova.plugins.barcodeScanner.scan(
		//	function (result) {
				result.text = '5JMTtVLuW1v81dqK15ftgmRY5fSKUAFp1iX94KqN1MdZpYTS5uJ';
				try{
					var ECPair = Bitcoin.ECPair.fromWIF(result.text);
					master.model.set('wif', result.text )
					master.model.signRawTx();
					master.checkAndDrawQr();
				} catch(err) {
					console.log('invalid WIF');
				}
		/*	},
			function (error) {
				alert("there was some error: " + error);
			}
		)*/
	}
});

var Transaction = Backbone.Model.extend({
	defaults:{
		rawTx : '',
		signedRawTx : '',
		wif : '',
	},
	signRawTx : function(){

		var master = this;
        console.log(this.get('rawTx'));
		try {
			var pp = Bitcoin.TransactionBuilder.fromTransaction(Bitcoin.Transaction.fromHex(this.get('rawTx')));//
			_.each(pp.inputs, function(a, i){ a.prevOutType = a.scriptType = typeof(a.hashType) == "undefined" ? undefined : a});
            console.log(pp);
			var redeemscript = pp.inputs[0].redeemScript || null;//Bitcoin.Transaction.fromHex(this.get('rawTx')).ins[0].script;
			pkey = Bitcoin.ECPair.fromWIF(this.get('wif'));
			_.each(pp.tx.ins, function(data, index) {
				try {
                    if (redeemscript) {
					   pp.sign(index, pkey, redeemscript);
                    } else {
                        pp.sign(index, pkey)
                    }
				} catch(err){
					console.log(err)
				}
			});
			try {
                console.log(pp);
				pp.build();
                console.log('1')
				console.log({ 
					'hash' : revertHash(pp.build().getHash().toString('hex')) , 
					'raw' : pp.build().toHex() 
				});
				return { 
					'hash' : revertHash(pp.build().getHash().toString('hex')) , 
					'raw' : pp.build().toHex() 
				}
			} catch(err) {
                console.log('2')
				console.log( { 
					'hash' : revertHash(pp.buildIncomplete().getHash().toString('hex')) , 
					'raw' : pp.buildIncomplete().toHex() 
				})
				return { 
					'hash' : revertHash(pp.buildIncomplete().getHash().toString('hex')) , 
					'raw' : pp.buildIncomplete().toHex() 
				}
			}
		} catch(err) {
			console.log(err);
			var txh = Bitcoin.Transaction.fromHex(master.get('rawTx'))
			var txb = Bitcoin.TransactionBuilder.fromTransaction(txh);
			txb.inputs = txb.inputs.map(function(a, i){ return typeof(a.hashType) == 'undefined' ? {} : a});
			//txb.signatures = [];

			_.each(txb.tx.ins, function(data, index) {
				try {
					txb.sign(index , Bitcoin.ECPair.fromWIF(master.get('wif')));
				} catch(err) {
					console.log(err);
				}

			});

			try {
				pp.build();
				console.log({ 
					'hash' : revertHash(pp.build().getHash().toString('hex')) , 
					'raw' : pp.build().toHex() 
				});
				return { 
					'hash' : revertHash(pp.build().getHash().toString('hex')) , 
					'raw' : pp.build().toHex() 
				}
			} catch(err) {
				console.log( { 
					'hash' : revertHash(pp.buildIncomplete().getHash().toString('hex')) , 
					'raw' : pp.buildIncomplete().toHex() 
				})
				return { 
					'hash' : revertHash(pp.buildIncomplete().getHash().toString('hex')) , 
					'raw' : pp.buildIncomplete().toHex() 
				}
			}
		}
	},
	outputs : function() {
		try {
			return _.map(Bitcoin.Transaction.fromHex(this.get('rawTx')).outs, function(a, b){
				console.log(a)
				scriptToAddress(a.script)
				return {
					address: scriptToAddress(a.script),
					value: a.value
				}
			})
		} catch(err) {
			console.log(err)
			return ''
		}
	},
	data : function() {
		return {
			rawTx : this.get('rawTx'),
			outputs : this.outputs(),
			wif : this.get('wif')
		}
	},

	pushTx: function() {
		var master = this;
		window.confirm('Are you sure you want to push this transaction? You should always double check your transaction using a third party website, like blockchain.info or blockr.io to decode, check an push the transaction')
		$.ajax({
			url: "https://btc.blockr.io/api/v1/tx/push",
			type: 'post',
			data: {hex: master.get('rawTx')},
			success: function(response) {
				window.alert(response);
			},
			error: function(err) {
				window.alert('The pushing to blockr.io failed, did you use valid signatures ? Eventually try pushing the data manually on another website');
			}
		});
	}

});
var Vault = Backbone.Model.extend({
	defaults: {
		WIF: '',
		passphrase: '',
		salt: ''
	},

	wif: function() {
		return this.get('WIF')
	},

	publicKey: function() {
		return WIFToPubKey(this.get('WIF'))
	},

	address: function() {
		return WIFToAddress(this.get('WIF'))
	},
});

var DeriveModel = Backbone.Model.extend({
	defaults: {
		masterKey : window.localStorage.getItem('masterKey') || null 
	},
	getData : function(n) {
		console.log(n);
		console.log(this.get('masterKey'))
		var address = (this.get('masterKey')) ? Bitcoin.HDNode.fromBase58(this.get('masterKey')).derive(n).getAddress() || null : null;
		console.log(address);
		var pubkey = (this.get('masterKey')) ? Bitcoin.HDNode.fromBase58(this.get('masterKey')).derive(n).getPublicKeyBuffer().toString('hex') || null : null;
		console.log(pubkey)
		try {
			Bitcoin.HDNode.fromBase58(this.get('masterKey')).derive(n).keyPair.toWIF()
			var pkey = (this.get('masterKey')) ? Bitcoin.HDNode.fromBase58(this.get('masterKey')).derive(n).keyPair.toWIF() || null : null;
		
			} catch(err) {
				console.log(err);
				pkey = 'null';
			}
		var xpub = (this.get('masterKey')) ? Bitcoin.HDNode.fromBase58(this.get('masterKey')).neutered().toBase58() || null : null;
		return {
			address : address ,
			pubkey : pubkey , 
			pkey : pkey,
			xpub : xpub
		}
	},
	saveMasterKey : function() {
		try {
			window.localStorage.setItem('masterKey', Bitcoin.HDNode.fromBase58( this.get('masterKey') ).neutered().toBase58())
			window.alert('PUBLIC MASTER KEY saved successfully')
			this.trigger('change');
		} catch(err) {
			window.alert('there was a problem : ' + err)
		}
	},
    deleteMasterKey: function() {
        this.set({'masterKey': null});
        this.trigger('change');
    }
});

var DeriveView = Backbone.View.extend({
	el: $('#derive'),
	template: _.template($('#derive-template').text()),
	events:{
		'click .btn-scan-master-key' : 'scanMasterKey',
		'click .btn-enter-seed' : 'enterWarpSeed',
		'click .btn-derivate' : 'derivate',
		'click .btn-enter-mpubkey' : 'enterMasterKey',
		//'click .btn-save-master-key' : 'saveMasterKey',
		'click .btn-forget-master-key' : 'forgetMasterKey'
	},
	forgetMasterKey: function() {
		try {
			window.localStorage.clear()
			window.alert('Deleted ! Nothing left in storage !')
            this.model.deleteMasterKey();
            this.model.trigger('change');

		} catch(err) {
			window.alert('Something went wrong : ' + err);
		}
	},
	/*saveMasterKey: function() {
		if (this.model.get('masterKey')) {
			if (window.confirm('Are you sure? This will overwrite any previous master key! Notice that the MASTER PUBLIC KEY will replace the MASTER PRIVATE KEY (which will be forgotten) if you continue !')){
				this.model.saveMasterKey();
			}
		} else {
			window.alert('there is no master key to save')
		}
	},*/
	enterMasterKey: function() {
		var mkey = window.prompt('Enter your Master Key')
		try {
			Bitcoin.HDNode.fromBase58(mkey);

			master.model.set('masterKey', mkey);
            master.model.saveMasterKey();
		} catch(err) {
			console.log(err)
		}
	},
	render: function() {
		var master = this;
		this.$el.html(this.template({masterKey: master.model.get('masterKey')}));
		return this;
	},
	scanMasterKey: function() {
		var master = this;
		cordova.plugins.barcodeScanner.scan(
			function (result) {
			//var result = {}
			//result.text = 'xpub661MyMwAqRbcFUz42g84vqvKbJ5dTVUya7X4K867YfnGUKAVorDPpywZcsQmPGz9k83NjPGTfzxDwQ8TpC7q8GbcSztYAK6dt7qzmRwmUow'
				try {
					Bitcoin.HDNode.fromBase58(result.text);
					master.model.set('masterKey', result.text);
				} catch(err) {
					console.log(err)
				}
			},
			function (err) {
				window.alert(err);
			}
		)
		this.showQRCodes();
	},
	derivate: function() {
		try {
			this.showQRCodes();
			window.alert('Derivation done !')
		} catch(err) {
			window.alert(err);
		}
	},
	showQRCodes: function() {
		try {
			var qrPkey = new QRCode("qrcode-pkey", {width: 160, height: 160,correctLevel : QRCode.CorrectLevel.L, colorDark : 'black'});
			var qrPubkey = new QRCode("qrcode-pubkey", {width: 160, height: 160,correctLevel : QRCode.CorrectLevel.L, colorDark : 'black'});
			var qrAddress = new QRCode("qrcode-address", {width: 160, height: 160,correctLevel : QRCode.CorrectLevel.L, colorDark : 'black'});
			var qrXpub = new QRCode("qrcode-xpub", {width: 160, height: 160,correctLevel : QRCode.CorrectLevel.L, colorDark : 'black'});
			var data = this.model.getData($('.derivation').val());
			console.log(data);
			qrAddress.makeCode(data.address);
			qrPubkey.makeCode(data.pubkey);
			if (data.pkey.length > 10) {
				qrPkey.makeCode(data.pkey);
			} else {
				$('.label-pkey').css('display','none');
				$('.private-key').css('display','none');
				$('.qrcode-pkey').css('display','none');
			}
			qrXpub.makeCode(data.xpub);

			$('.label-address').val(data.address);
			$('.label-pubkey').val(data.pubkey);
			$('.label-pkey').val(data.pkey);
			$('.label-xpub').val(data.xpub);

			$('canvas').css({
				'position': 'absolute',
				'margin-left': '8%',
				'margin-right': '8%',
				'width': '70%',
				'vertical-align': 'middle',
				'background':'default', 
				'border': '8px solid #FFFFFF', 
				'color': '#000000', 
				'title': 'Details',
				'hide': { effect: "fade", duration: 2000 }
			});
			$('.qrcode').css('display','block');
			$('.qrcode').css('height', 0.7 * $('body').width() + 'px');
			$('.qrcodes').css('display','block');

			if (data.pkey.length < 10) {
				$('.label-pkey').css('display','none');
				$('.private-key').css('display','none');
				$('.qrcode-pkey').css('display','none');
			}
		} catch(err){
			console.log(err);
		}		
	},
	enterWarpSeed: function() {
		var master = this;
		var passphrase = window.prompt('Enter your warp passphrase');
		if (!passphrase) {return}
		var salt = window.prompt('Enter your warp salt');
		var def = $.Deferred();
		$('.calculation').css('display','block');

		var hook = function(pct){
			var value = (Math.floor(100 * (((pct.what == 'pbkdf2' ? 524288 : 0) + pct.i) / (524288 + 65536))) );
			$('.calculation').html(value + ' %')
		}
		var def = $.Deferred();
		warp(hook, passphrase , salt, def)
		def.done(function(wif){
			master.model.set('masterKey', Bitcoin.HDNode.fromSeedHex( base58.decode(wif).toString(16)).toBase58());
			window.alert('Master Key created, you can now derive it')
			//console.log(master.model.get('masterKey'));
		})	
	}
});

var app = {
	activeViews:[],
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	undelegateAll: function() {
		_.each(this.activeViews, function(view) {
			try {
				view.undelegateEvents();
				$(view.el).removeData().unbind(); 
			} catch(err) {
				console.log(err)
			}
		})
	},


	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		//app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	/*receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	},*/

	index: function(){

	},

	vault: function(){
		this.undelegateAll();
		this.bindEvents();

		vaultHolder = $('#vault');
		vaultHolder.empty()	
		var vaultModel = new Vault;
		var vaultView = new VaultView({model:new Vault});

		this.activeViews.push( vaultView );
		vaultView.render().$el.appendTo(vaultHolder)	
		vaultHolder.enhanceWithin();
	},

	sign: function(){

		this.undelegateAll();
		this.bindEvents();

		var tx = new Transaction({})

		signHolder = $('#sign');
		signHolder.empty()
		var view = new signView({model:tx});
		this.activeViews.push( view );

		var render = function(){
			view.render().$el.appendTo(signHolder)
			signHolder.enhanceWithin();	
		}

		render();

		tx.listenTo(tx, 'change', render)

	},

	derive: function(){

		this.undelegateAll();
		this.bindEvents();

		
		deriveModel = new DeriveModel({});
		deriveHolder = $('#derive');
		deriveHolder.empty()
		var view = new DeriveView({model:deriveModel});
		this.activeViews.push( view );

		var render = function(){
			view.render().$el.appendTo(deriveHolder)
			deriveHolder.enhanceWithin();	
		}
		var enhance = function(){
			deriveHolder.enhanceWithin();
		}
		render();

		view.listenTo(deriveModel, 'change', render)
	},
};

var router = new $.mobile.Router([
		{ "": { handler: "index", events: "bs"} },
		{ "#vault": { handler: "vault", events: "bs"} },
		{ "#sign": { handler: "sign", events: "bs"} },
		{ "#derive": { handler: "derive", events: "bs"} }
], app);