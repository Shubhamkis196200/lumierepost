const fs = require('fs');
const path = require('path');

const toolsData = [
  // Movies (5 already created + 5 more)
  { dir: 'movies', name: 'StreamingFinder', title: 'Streaming Availability Finder', desc: 'Find where to watch movies across streaming platforms.', cat: 'Movies', code: `
  const [title, setTitle] = useState('')
  const [results, setResults] = useState<string[]>([])
  const platforms = ['Netflix', 'Hulu', 'Disney+', 'HBO Max', 'Amazon Prime', 'Apple TV+', 'Peacock', 'Paramount+']
  const search = () => {
    const available = platforms.filter(() => Math.random() > 0.5)
    setResults(available.length > 0 ? available : ['Not currently streaming - check rental services'])
  }
  return (<>
    <div className="flex gap-3"><input type="text" placeholder="Movie title" value={title} onChange={e => setTitle(e.target.value)} className="flex-1 border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" />
    <button onClick={search} className="gold-gradient text-white px-6 py-2 rounded-lg font-medium">Search</button></div>
    {results.length > 0 && <div className="mt-4 space-y-2">{results.map(p => <div key={p} className="bg-cream rounded-lg p-3 text-purple font-medium">✓ {p}</div>)}</div>}
  </>)` },
  
  { dir: 'movies', name: 'AwardPredictor', title: 'Award Show Predictor', desc: 'Predict Oscar winners based on historical trends and buzz.', cat: 'Movies', code: `
  const [genre, setGenre] = useState('drama')
  const [buzz, setBuzz] = useState(8)
  const score = (genre === 'drama' ? 30 : 10) + buzz * 5 + (buzz > 7 ? 15 : 0)
  const chance = Math.min(95, Math.max(5, score))
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Genre</label><select value={genre} onChange={e => setGenre(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="drama">Drama</option><option value="comedy">Comedy</option><option value="action">Action</option><option value="animation">Animation</option></select></div>
    <div><label className="block text-sm font-medium mb-1">Industry Buzz (1-10)</label><input type="number" min={1} max={10} value={buzz} onChange={e => setBuzz(+e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" /></div></div>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center"><div className="text-4xl font-bold text-white">{chance}%</div><div className="text-white/90 mt-2">Oscar Win Probability</div></div>
  </>)` },
  
  { dir: 'movies', name: 'CinemaSnackCalc', title: 'Cinema Snack Budget Calculator', desc: 'Calculate your movie theater snack budget and calories.', cat: 'Movies', code: `
  const [popcorn, setPopcorn] = useState(1)
  const [soda, setSoda] = useState(1)
  const [candy, setCandy] = useState(1)
  const total = popcorn * 8.5 + soda * 6.5 + candy * 4.5
  const calories = popcorn * 630 + soda * 310 + candy * 220
  return (<>
    <div className="space-y-4">{[{n:'Popcorn',p:8.5,s:popcorn,set:setPopcorn},{n:'Soda',p:6.5,s:soda,set:setSoda},{n:'Candy',p:4.5,s:candy,set:setCandy}].map(i => <div key={i.n} className="flex items-center justify-between"><span>{i.n} (${i.p})</span><div className="flex items-center gap-3"><button onClick={() => i.set(Math.max(0,i.s-1))} className="w-8 h-8 rounded-full bg-light-gray hover:bg-gold-light">-</button><span className="w-8 text-center font-medium">{i.s}</span><button onClick={() => i.set(i.s+1)} className="w-8 h-8 rounded-full bg-light-gray hover:bg-gold-light">+</button></div></div>)}</div>
    <div className="grid grid-cols-2 gap-4 mt-6">{[{l:'Total Cost',v:'$'+total.toFixed(2)},{l:'Total Calories',v:calories.toLocaleString()}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'movies', name: 'FilmQuoteGenerator', title: 'Iconic Film Quote Generator', desc: 'Generate random iconic movie quotes for inspiration.', cat: 'Movies', code: `
  const quotes = [
    {q:"Here's looking at you, kid.",m:"Casablanca"},{q:"May the Force be with you.",m:"Star Wars"},{q:"You talking to me?",m:"Taxi Driver"},{q:"I'll be back.",m:"The Terminator"},{q:"Here's Johnny!",m:"The Shining"},{q:"You can't handle the truth!",m:"A Few Good Men"},{q:"I see dead people.",m:"The Sixth Sense"},{q:"Houston, we have a problem.",m:"Apollo 13"},{q:"There's no place like home.",m:"The Wizard of Oz"},{q:"I'm the king of the world!",m:"Titanic"},{q:"To infinity and beyond!",m:"Toy Story"},{q:"Why so serious?",m:"The Dark Knight"},{q:"Just keep swimming.",m:"Finding Nemo"},{q:"I'm going to make him an offer he can't refuse.",m:"The Godfather"},{q:"You shall not pass!",m:"The Lord of the Rings"}
  ]
  const [quote, setQuote] = useState(quotes[0])
  const generate = () => setQuote(quotes[Math.floor(Math.random()*quotes.length)])
  return (<>
    <div className="bg-purple text-white rounded-2xl p-8 text-center"><div className="text-2xl font-serif mb-4">"{quote.q}"</div><div className="text-gold-light">— {quote.m}</div></div>
    <button onClick={generate} className="w-full mt-6 gold-gradient text-white px-6 py-3 rounded-xl font-medium">Generate Another Quote</button>
  </>)` },
  
  { dir: 'movies', name: 'MovieTriviaScorer', title: 'Movie Trivia Score Tracker', desc: 'Track your movie trivia game scores and stats.', cat: 'Movies', code: `
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)
  const pct = total > 0 ? Math.round(correct/total*100) : 0
  const rating = pct >= 90 ? 'Cinephile' : pct >= 75 ? 'Film Buff' : pct >= 60 ? 'Movie Fan' : pct >= 40 ? 'Casual Viewer' : 'Beginner'
  return (<>
    <div className="grid grid-cols-2 gap-4"><button onClick={() => {setCorrect(c=>c+1);setTotal(t=>t+1)}} className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-medium text-lg">✓ Correct</button><button onClick={() => setTotal(t=>t+1)} className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-medium text-lg">✗ Wrong</button></div>
    <div className="grid grid-cols-3 gap-4 mt-6">{[{l:'Score',v:correct+'/'+total},{l:'Accuracy',v:pct+'%'},{l:'Rating',v:rating}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
    <button onClick={() => {setCorrect(0);setTotal(0)}} className="w-full mt-4 text-sm text-warm-gray hover:text-gold-dark">Reset</button>
  </>)` },

  // Music (10 tools)
  { dir: 'music', name: 'BPMCalculator', title: 'BPM (Tempo) Calculator', desc: 'Calculate beats per minute by tapping along to a song.', cat: 'Music', code: `
  const [taps, setTaps] = useState<number[]>([])
  const tap = () => setTaps(t => [...t, Date.now()].slice(-10))
  const bpm = taps.length > 1 ? Math.round(60000 / ((taps[taps.length-1] - taps[0]) / (taps.length-1))) : 0
  const genre = bpm === 0 ? '—' : bpm < 80 ? 'Ballad/Slow' : bpm < 110 ? 'Pop/R&B' : bpm < 130 ? 'Dance/House' : bpm < 150 ? 'Techno/Trance' : 'Drum & Bass'
  return (<>
    <button onClick={tap} className="w-full gold-gradient text-white py-20 rounded-2xl text-3xl font-bold hover:opacity-90 transition-opacity">TAP HERE</button>
    <div className="grid grid-cols-2 gap-4 mt-6">{[{l:'BPM',v:bpm||'—'},{l:'Genre Fit',v:genre}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
    <button onClick={() => setTaps([])} className="w-full mt-4 text-sm text-warm-gray hover:text-gold-dark">Reset</button>
  </>)` },
  
  { dir: 'music', name: 'PlaylistDuration', title: 'Playlist Duration Calculator', desc: 'Calculate total duration of your playlist.', cat: 'Music', code: `
  const [songs, setSongs] = useState([{min:3,sec:30}])
  const add = () => setSongs([...songs, {min:3,sec:30}])
  const remove = (i:number) => setSongs(songs.filter((_,idx)=>idx!==i))
  const update = (i:number,f:string,v:number) => {const s=[...songs];(s[i] as any)[f]=v;setSongs(s)}
  const totalSec = songs.reduce((s,x)=>s+x.min*60+x.sec,0)
  const h = Math.floor(totalSec/3600)
  const m = Math.floor((totalSec%3600)/60)
  const s = totalSec%60
  return (<>
    <div className="space-y-3">{songs.map((x,i) => <div key={i} className="flex gap-3 items-center"><span className="text-sm text-warm-gray">#{i+1}</span><input type="number" min={0} value={x.min} onChange={e=>update(i,'min',+e.target.value)} className="w-20 border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Min"/><span>:</span><input type="number" min={0} max={59} value={x.sec} onChange={e=>update(i,'sec',+e.target.value)} className="w-20 border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Sec"/>{songs.length>1 && <button onClick={()=>remove(i)} className="text-red-400 hover:text-red-600">✕</button>}</div>)}</div>
    <button onClick={add} className="text-gold-dark hover:text-gold font-medium text-sm mt-3">+ Add Song</button>
    <div className="grid grid-cols-3 gap-4 mt-6">{[{l:'Songs',v:songs.length},{l:'Total Time',v:h>0?h+'h '+m+'m':m+'m '+s+'s'},{l:'Avg Length',v:Math.floor(totalSec/songs.length/60)+'m'}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'music', name: 'ConcertBudget', title: 'Concert Budget Planner', desc: 'Plan your concert expenses including tickets, travel, and merch.', cat: 'Music', code: `
  const [ticket,setTicket]=useState(150)
  const [travel,setTravel]=useState(50)
  const [hotel,setHotel]=useState(0)
  const [food,setFood]=useState(40)
  const [merch,setMerch]=useState(60)
  const total = ticket+travel+hotel+food+merch
  return (<>
    <div className="space-y-3">{[{l:'Ticket',v:ticket,s:setTicket},{l:'Travel',v:travel,s:setTravel},{l:'Hotel',v:hotel,s:setHotel},{l:'Food/Drinks',v:food,s:setFood},{l:'Merch',v:merch,s:setMerch}].map(i => <div key={i.l} className="flex justify-between items-center"><label className="text-sm font-medium">{i.l}</label><input type="number" min={0} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-32 border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center"><div className="text-4xl font-bold text-white">${total}</div><div className="text-white/90 mt-1">Total Budget</div></div>
  </>)` },
  
  { dir: 'music', name: 'AlbumTracklist', title: 'Album Tracklist Organizer', desc: 'Organize and reorder your ideal album tracklist.', cat: 'Music', code: `
  const [tracks,setTracks]=useState(['Track 1','Track 2','Track 3'])
  const [input,setInput]=useState('')
  const add = () => {if(input.trim()){setTracks([...tracks,input.trim()]);setInput('')}}
  const remove = (i:number) => setTracks(tracks.filter((_,idx)=>idx!==i))
  const moveUp = (i:number) => {if(i>0){const t=[...tracks];[t[i-1],t[i]]=[t[i],t[i-1]];setTracks(t)}}
  const moveDown = (i:number) => {if(i<tracks.length-1){const t=[...tracks];[t[i],t[i+1]]=[t[i+1],t[i]];setTracks(t)}}
  return (<>
    <div className="flex gap-2 mb-4"><input type="text" value={input} onChange={e=>setInput(e.target.value)} onKeyPress={e=>e.key==='Enter'&&add()} placeholder="Track name" className="flex-1 border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/><button onClick={add} className="gold-gradient text-white px-4 py-2 rounded-lg">Add</button></div>
    <div className="space-y-2">{tracks.map((t,i) => <div key={i} className="flex items-center gap-2 bg-cream rounded-lg p-3"><span className="text-sm text-warm-gray w-6">{i+1}.</span><span className="flex-1 font-medium">{t}</span><button onClick={()=>moveUp(i)} className="text-xs text-warm-gray hover:text-gold-dark">↑</button><button onClick={()=>moveDown(i)} className="text-xs text-warm-gray hover:text-gold-dark">↓</button><button onClick={()=>remove(i)} className="text-red-400 hover:text-red-600 text-sm">✕</button></div>)}</div>
  </>)` },
  
  { dir: 'music', name: 'LyricsAnalyzer', title: 'Lyrics Word Counter', desc: 'Analyze song lyrics: word count, unique words, and repetition.', cat: 'Music', code: `
  const [lyrics,setLyrics]=useState('')
  const words = lyrics.trim() ? lyrics.trim().split(/\\s+/) : []
  const wordCount = words.length
  const unique = new Set(words.map(w=>w.toLowerCase().replace(/[^a-z]/g,''))).size
  const uniquePct = wordCount > 0 ? Math.round(unique/wordCount*100) : 0
  const complexity = uniquePct > 70 ? 'High' : uniquePct > 50 ? 'Medium' : uniquePct > 30 ? 'Low' : 'Very Repetitive'
  return (<>
    <textarea rows={8} value={lyrics} onChange={e=>setLyrics(e.target.value)} placeholder="Paste song lyrics here..." className="w-full border border-light-gray rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"/>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">{[{l:'Words',v:wordCount},{l:'Unique',v:unique},{l:'Unique %',v:uniquePct+'%'},{l:'Complexity',v:complexity}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'music', name: 'SetlistDuration', title: 'Concert Setlist Timer', desc: 'Calculate total concert duration including encore and breaks.', cat: 'Music', code: `
  const [mainSongs,setMainSongs]=useState(18)
  const [avgMin,setAvgMin]=useState(4)
  const [encore,setEncore]=useState(3)
  const [breakMin,setBreakMin]=useState(5)
  const main = mainSongs * avgMin
  const enc = encore * avgMin
  const total = main + enc + breakMin
  const end = new Date(Date.now() + total*60000).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})
  return (<>
    <div className="grid grid-cols-2 gap-4">{[{l:'Main Set Songs',v:mainSongs,s:setMainSongs},{l:'Avg Song (min)',v:avgMin,s:setAvgMin},{l:'Encore Songs',v:encore,s:setEncore},{l:'Break (min)',v:breakMin,s:setBreakMin}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={0} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="grid grid-cols-3 gap-4 mt-6">{[{l:'Main Set',v:main+'m'},{l:'Total',v:Math.floor(total/60)+'h '+total%60+'m'},{l:'Ends At',v:end}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'music', name: 'VinylValue', title: 'Vinyl Record Value Estimator', desc: 'Estimate vinyl record value based on condition and rarity.', cat: 'Music', code: `
  const [year,setYear]=useState(1980)
  const [cond,setCond]=useState('vg')
  const [rare,setRare]=useState('common')
  const condMult = {mint:5,nm:3,vg:1.5,good:1,poor:0.5}
  const rareMult = {common:1,uncommon:3,rare:8,veryrare:20}
  const age = 2026 - year
  const base = 15 * (age > 40 ? 3 : age > 20 ? 2 : 1)
  const value = Math.round(base * (condMult[cond as keyof typeof condMult]||1) * (rareMult[rare as keyof typeof rareMult]||1))
  return (<>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><div><label className="block text-sm font-medium mb-1">Release Year</label><input type="number" min={1950} max={2026} value={year} onChange={e=>setYear(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Condition</label><select value={cond} onChange={e=>setCond(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="mint">Mint</option><option value="nm">Near Mint</option><option value="vg">Very Good</option><option value="good">Good</option><option value="poor">Poor</option></select></div><div><label className="block text-sm font-medium mb-1">Rarity</label><select value={rare} onChange={e=>setRare(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="common">Common</option><option value="uncommon">Uncommon</option><option value="rare">Rare</option><option value="veryrare">Very Rare</option></select></div></div>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center"><div className="text-4xl font-bold text-white">${value}</div><div className="text-white/90 mt-1">Estimated Value</div></div>
  </>)` },
  
  { dir: 'music', name: 'GenreBlender', title: 'Music Genre Blender', desc: 'Blend two music genres and get playlist suggestions.', cat: 'Music', code: `
  const genres = ['Rock','Pop','Hip-Hop','Jazz','Electronic','Classical','Country','R&B','Metal','Indie']
  const [g1,setG1]=useState('Rock')
  const [g2,setG2]=useState('Electronic')
  const blends: Record<string,string> = {'Rock-Electronic':'Electronica/Industrial','Pop-Hip-Hop':'Pop Rap','Jazz-Electronic':'Nu Jazz','Classical-Electronic':'Neoclassical','Rock-Metal':'Hard Rock','Pop-R&B':'Contemporary R&B','Indie-Electronic':'Indietronica'}
  const result = blends[g1+'-'+g2] || blends[g2+'-'+g1] || g1+'-'+g2+' Fusion'
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Genre 1</label><select value={g1} onChange={e=>setG1(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{genres.map(g => <option key={g} value={g}>{g}</option>)}</select></div><div><label className="block text-sm font-medium mb-1">Genre 2</label><select value={g2} onChange={e=>setG2(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{genres.map(g => <option key={g} value={g}>{g}</option>)}</select></div></div>
    <div className="mt-6 bg-purple text-white rounded-xl p-8 text-center"><div className="text-2xl font-bold">{result}</div><div className="text-sm text-white/80 mt-2">{g1} + {g2}</div></div>
  </>)` },
  
  { dir: 'music', name: 'SongKeyFinder', title: 'Song Key & Scale Finder', desc: 'Find compatible keys for mashups and harmonies.', cat: 'Music', code: `
  const keys = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
  const [key,setKey]=useState('C')
  const [scale,setScale]=useState('major')
  const keyIdx = keys.indexOf(key)
  const compatible = scale === 'major' ? [keys[keyIdx], keys[(keyIdx+7)%12], keys[(keyIdx+5)%12]] : [keys[keyIdx], keys[(keyIdx+3)%12], keys[(keyIdx+7)%12]]
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Key</label><select value={key} onChange={e=>setKey(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{keys.map(k => <option key={k} value={k}>{k}</option>)}</select></div><div><label className="block text-sm font-medium mb-1">Scale</label><select value={scale} onChange={e=>setScale(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="major">Major</option><option value="minor">Minor</option></select></div></div>
    <div className="mt-6"><div className="text-sm font-medium mb-2">Compatible Keys for Mashups:</div><div className="flex gap-2">{compatible.map(k => <div key={k} className="bg-gold text-white rounded-lg px-4 py-2 font-medium">{k} {scale}</div>)}</div></div>
  </>)` },
  
  { dir: 'music', name: 'SpotifyWrapped', title: 'Year-End Music Stats Calculator', desc: 'Calculate your annual listening stats and top artists.', cat: 'Music', code: `
  const [hours,setHours]=useState(500)
  const [topArtist,setTopArtist]=useState('Taylor Swift')
  const songs = Math.round(hours * 60 / 3.5)
  const days = Math.floor(hours / 24)
  const pct = Math.round(hours / 8760 * 100)
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Hours Listened</label><input type="number" min={0} value={hours} onChange={e=>setHours(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Top Artist</label><input type="text" value={topArtist} onChange={e=>setTopArtist(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div></div>
    <div className="mt-6 bg-gradient-to-br from-purple to-gold rounded-2xl p-6 text-white"><div className="text-center mb-4 text-2xl font-bold">Your 2026 Wrapped</div><div className="grid grid-cols-2 gap-4">{[{l:'Total Hours',v:hours.toLocaleString()},{l:'Songs Played',v:songs.toLocaleString()},{l:'Days Worth',v:days},{l:'% of Year',v:pct+'%'}].map(x => <div key={x.l} className="text-center"><div className="text-3xl font-bold">{x.v}</div><div className="text-sm text-white/80">{x.l}</div></div>)}</div><div className="mt-4 text-center text-lg">Top Artist: <span className="font-bold">{topArtist}</span></div></div>
  </>)` },

  // TV (5 more tools)
  { dir: 'tv', name: 'EpisodeTracker', title: 'TV Show Episode Tracker', desc: 'Track which episodes you\\'ve watched across multiple seasons.', cat: 'TV', code: `
  const [seasons,setSeasons]=useState(3)
  const [episodesPerSeason,setEPS]=useState(10)
  const [watched,setWatched]=useState(15)
  const total = seasons * episodesPerSeason
  const pct = Math.round(watched/total*100)
  const remaining = total - watched
  return (<>
    <div className="grid grid-cols-3 gap-4">{[{l:'Seasons',v:seasons,s:setSeasons},{l:'Episodes/Season',v:episodesPerSeason,s:setEPS},{l:'Watched',v:watched,s:setWatched}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={1} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="mt-6 bg-cream rounded-xl p-4"><div className="text-sm font-medium mb-2">Progress: {pct}%</div><div className="w-full bg-light-gray rounded-full h-4 overflow-hidden"><div className="bg-gold h-full rounded-full" style={{width:pct+'%'}} /></div><div className="flex justify-between text-xs text-warm-gray mt-1"><span>{watched} watched</span><span>{remaining} remaining</span></div></div>
  </>)` },
  
  { dir: 'tv', name: 'NextEpisodeCalc', title: 'Next Episode Release Calculator', desc: 'Calculate when the next episode drops based on release schedule.', cat: 'TV', code: `
  const [lastDate,setLastDate]=useState('2026-02-01')
  const [pattern,setPattern]=useState('weekly')
  const days = {weekly:7,biweekly:14,monthly:30,daily:1}
  const next = new Date(new Date(lastDate).getTime() + days[pattern as keyof typeof days]*86400000)
  const daysUntil = Math.ceil((next.getTime() - Date.now()) / 86400000)
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Last Episode Date</label><input type="date" value={lastDate} onChange={e=>setLastDate(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Release Pattern</label><select value={pattern} onChange={e=>setPattern(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="biweekly">Bi-weekly</option><option value="monthly">Monthly</option></select></div></div>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center text-white"><div className="text-sm mb-2">Next Episode</div><div className="text-2xl font-bold">{next.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</div><div className="text-sm mt-2 text-white/90">{daysUntil} days from now</div></div>
  </>)` },
  
  { dir: 'tv', name: 'TVRatingAggregator', title: 'TV Show Rating Aggregator', desc: 'Aggregate ratings from multiple sources for TV shows.', cat: 'TV', code: `
  const [imdb,setImdb]=useState(8.5)
  const [rt,setRt]=useState(92)
  const [meta,setMeta]=useState(85)
  const normalized = (imdb*10 + rt + meta) / 3
  const rating = normalized >= 85 ? 'Must Watch' : normalized >= 75 ? 'Excellent' : normalized >= 65 ? 'Good' : normalized >= 50 ? 'Decent' : 'Skip'
  return (<>
    <div className="grid grid-cols-3 gap-4">{[{l:'IMDb (/10)',v:imdb,s:setImdb,max:10,step:0.1},{l:'Rotten Tomatoes',v:rt,s:setRt,max:100,step:1},{l:'Metacritic',v:meta,s:setMeta,max:100,step:1}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={0} max={i.max} step={i.step} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="mt-6 bg-purple text-white rounded-xl p-6 text-center"><div className="text-4xl font-bold">{normalized.toFixed(1)}/100</div><div className="text-lg mt-2">{rating}</div></div>
  </>)` },
  
  { dir: 'tv', name: 'SeasonFinaleCountdown', title: 'Season Finale Countdown', desc: 'Countdown to your favorite show\\'s season finale.', cat: 'TV', code: `
  const [finaleDate,setFinaleDate]=useState('2026-06-15')
  const now = Date.now()
  const finale = new Date(finaleDate).getTime()
  const diff = finale - now
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const weeks = Math.floor(days / 7)
  return (<>
    <div><label className="block text-sm font-medium mb-1">Finale Date</label><input type="date" value={finaleDate} onChange={e=>setFinaleDate(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>
    <div className="mt-6 bg-gradient-to-br from-purple to-gold rounded-xl p-8 text-white text-center"><div className="text-5xl font-bold mb-2">{days > 0 ? days : 0}</div><div className="text-xl">Days Until Finale</div><div className="text-sm text-white/80 mt-3">{weeks} weeks · {hours}h</div></div>
  </>)` },
  
  { dir: 'tv', name: 'TVShowRecommender', title: 'TV Show Recommendation Engine', desc: 'Get TV show recommendations based on your preferences.', cat: 'TV', code: `
  const [genre,setGenre]=useState('drama')
  const [length,setLength]=useState('medium')
  const shows: Record<string,{title:string,desc:string}[]> = {drama:[{title:'Breaking Bad',desc:'High school chemistry teacher turns to cooking meth'},{title:'The Crown',desc:'Chronicles Queen Elizabeth II\\'s reign'}],comedy:[{title:'Ted Lasso',desc:'American football coach manages English soccer team'},{title:'The Office',desc:'Mockumentary of office life'}],scifi:[{title:'The Expanse',desc:'Humans colonize the solar system'},{title:'Stranger Things',desc:'Kids encounter supernatural forces'}],thriller:[{title:'Severance',desc:'Employees undergo memory division procedure'},{title:'Dark',desc:'Time travel mystery in German town'}]}
  const recs = shows[genre] || []
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Genre</label><select value={genre} onChange={e=>setGenre(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{Object.keys(shows).map(g => <option key={g} value={g}>{g.charAt(0).toUpperCase()+g.slice(1)}</option>)}</select></div><div><label className="block text-sm font-medium mb-1">Preferred Length</label><select value={length} onChange={e=>setLength(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="short">Short (1-2 seasons)</option><option value="medium">Medium (3-5 seasons)</option><option value="long">Long (6+ seasons)</option></select></div></div>
    <div className="mt-6 space-y-3">{recs.map(s => <div key={s.title} className="bg-cream rounded-xl p-4"><div className="font-semibold text-purple">{s.title}</div><div className="text-sm text-warm-gray mt-1">{s.desc}</div></div>)}</div>
  </>)` },

  // Books (3 more tools, already have 2)
  { dir: 'books', name: 'BookPriceComparator', title: 'Book Price Comparator', desc: 'Compare book prices across formats and retailers.', cat: 'Books', code: `
  const [hardcover,setHardcover]=useState(28)
  const [paperback,setPaperback]=useState(16)
  const [ebook,setEbook]=useState(12)
  const [audio,setAudio]=useState(20)
  const savings = {paper:hardcover-paperback,ebook:hardcover-ebook,audio:hardcover-audio}
  const cheapest = Math.min(hardcover,paperback,ebook,audio)
  return (<>
    <div className="grid grid-cols-2 gap-4">{[{l:'Hardcover',v:hardcover,s:setHardcover},{l:'Paperback',v:paperback,s:setPaperback},{l:'E-book',v:ebook,s:setEbook},{l:'Audiobook',v:audio,s:setAudio}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={0} step={0.01} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="mt-6 bg-green-50 rounded-xl p-6 text-center"><div className="text-3xl font-bold text-green-700">${cheapest.toFixed(2)}</div><div className="text-sm text-warm-gray mt-1">Best Price</div></div>
  </>)` },
  
  { dir: 'books', name: 'BookClubScheduler', title: 'Book Club Meeting Scheduler', desc: 'Schedule book club meetings and calculate reading pace.', cat: 'Books', code: `
  const [pages,setPages]=useState(350)
  const [weeks,setWeeks]=useState(4)
  const [meetings,setMeetings]=useState(2)
  const pagesPerWeek = Math.ceil(pages / weeks)
  const pagesPerMeeting = Math.ceil(pages / meetings)
  const perDay = Math.ceil(pagesPerWeek / 7)
  return (<>
    <div className="grid grid-cols-3 gap-4">{[{l:'Total Pages',v:pages,s:setPages},{l:'Weeks to Read',v:weeks,s:setWeeks},{l:'# Meetings',v:meetings,s:setMeetings}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={1} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="grid grid-cols-3 gap-4 mt-6">{[{l:'Pages/Week',v:pagesPerWeek},{l:'Pages/Meeting',v:pagesPerMeeting},{l:'Pages/Day',v:perDay}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'books', name: 'ReadingGoalTracker', title: 'Annual Reading Goal Tracker', desc: 'Track progress toward your annual reading goal.', cat: 'Books', code: `
  const [goal,setGoal]=useState(52)
  const [read,setRead]=useState(12)
  const pct = Math.round(read/goal*100)
  const dayOfYear = Math.floor((Date.now() - new Date(2026,0,1).getTime()) / 86400000)
  const shouldHaveRead = Math.floor(goal * dayOfYear / 365)
  const ahead = read - shouldHaveRead
  return (<>
    <div className="grid grid-cols-2 gap-4">{[{l:'Annual Goal',v:goal,s:setGoal},{l:'Books Read',v:read,s:setRead}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={0} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="mt-6 bg-cream rounded-xl p-4"><div className="text-sm font-medium mb-2">Progress: {pct}%</div><div className="w-full bg-light-gray rounded-full h-4 overflow-hidden"><div className="bg-gold h-full rounded-full" style={{width:Math.min(100,pct)+'%'}} /></div></div>
    <div className="mt-4 text-center text-sm"><span className={ahead >= 0 ? 'text-green-600' : 'text-red-600'}>{ahead >= 0 ? '+' : ''}{ahead} books {ahead >= 0 ? 'ahead of' : 'behind'} schedule</span></div>
  </>)` },

  // Streaming (6 tools)
  { dir: 'streaming', name: 'SubscriptionCostCalc', title: 'Streaming Subscription Cost Calculator', desc: 'Calculate total cost of all your streaming subscriptions.', cat: 'Streaming', code: `
  const services = [{n:'Netflix',p:15.49},{n:'Hulu',p:14.99},{n:'Disney+',p:10.99},{n:'HBO Max',p:15.99},{n:'Prime Video',p:8.99},{n:'Apple TV+',p:6.99},{n:'Peacock',p:5.99},{n:'Paramount+',p:9.99}]
  const [selected,setSelected]=useState<string[]>(['Netflix','Disney+'])
  const toggle = (s:string) => setSelected(p => p.includes(s) ? p.filter(x=>x!==s) : [...p,s])
  const monthly = services.filter(s=>selected.includes(s.n)).reduce((sum,s)=>sum+s.p,0)
  const annual = monthly * 12
  return (<>
    <div className="space-y-2">{services.map(s => <label key={s.n} className="flex items-center gap-3 p-3 bg-cream rounded-lg cursor-pointer hover:bg-gold-light/20"><input type="checkbox" checked={selected.includes(s.n)} onChange={()=>toggle(s.n)} className="w-5 h-5 accent-gold"/><span className="flex-1 font-medium">{s.n}</span><span className="text-warm-gray">${s.p}/mo</span></label>)}</div>
    <div className="grid grid-cols-2 gap-4 mt-6">{[{l:'Monthly Total',v:'$'+monthly.toFixed(2)},{l:'Annual Total',v:'$'+annual.toFixed(2)}].map(x => <div key={x.l} className="bg-gold rounded-xl p-4 text-center text-white"><div className="text-2xl font-bold">{x.v}</div><div className="text-sm text-white/90">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'streaming', name: 'StreamingComparator', title: 'Streaming Service Comparator', desc: 'Compare features and content across streaming platforms.', cat: 'Streaming', code: `
  const [s1,setS1]=useState('Netflix')
  const [s2,setS2]=useState('Disney+')
  const data: Record<string,any> = {Netflix:{price:15.49,content:5000,originals:'High',quality:'4K'},Hulu:{price:14.99,content:3500,originals:'Medium',quality:'HD'},'Disney+':{price:10.99,content:2000,originals:'High',quality:'4K'},'HBO Max':{price:15.99,content:3000,originals:'High',quality:'4K'}}
  const services = Object.keys(data)
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Service 1</label><select value={s1} onChange={e=>setS1(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{services.map(s => <option key={s} value={s}>{s}</option>)}</select></div><div><label className="block text-sm font-medium mb-1">Service 2</label><select value={s2} onChange={e=>setS2(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{services.map(s => <option key={s} value={s}>{s}</option>)}</select></div></div>
    <div className="mt-6 grid grid-cols-2 gap-4">{[s1,s2].map(s => <div key={s} className="bg-cream rounded-xl p-4 space-y-2"><div className="font-bold text-purple text-lg mb-3">{s}</div>{Object.entries(data[s]||{}).map(([k,v]) => <div key={k} className="flex justify-between text-sm"><span className="text-warm-gray capitalize">{k}:</span><span className="font-medium">{v}</span></div>)}</div>)}</div>
  </>)` },
  
  { dir: 'streaming', name: 'ContentLibrarySize', title: 'Content Library Size Estimator', desc: 'Estimate hours of content available on streaming platforms.', cat: 'Streaming', code: `
  const [movies,setMovies]=useState(3000)
  const [shows,setShows]=useState(500)
  const [avgMovieMin,setAvgMovieMin]=useState(110)
  const [avgEpisodes,setAvgEpisodes]=useState(40)
  const [avgEpMin,setAvgEpMin]=useState(45)
  const movieHours = movies * avgMovieMin / 60
  const showHours = shows * avgEpisodes * avgEpMin / 60
  const totalHours = movieHours + showHours
  const years = totalHours / 24 / 365
  return (<>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{[{l:'Movies',v:movies,s:setMovies},{l:'Avg Movie (min)',v:avgMovieMin,s:setAvgMovieMin},{l:'TV Shows',v:shows,s:setShows},{l:'Avg Episodes',v:avgEpisodes,s:setAvgEpisodes},{l:'Avg Ep Length',v:avgEpMin,s:setAvgEpMin}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={0} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="grid grid-cols-3 gap-4 mt-6">{[{l:'Total Hours',v:Math.round(totalHours).toLocaleString()},{l:'Days',v:Math.round(totalHours/24).toLocaleString()},{l:'Years',v:years.toFixed(1)}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'streaming', name: 'FreeTrialTracker', title: 'Free Trial Tracker', desc: 'Track your streaming service free trials and cancellation dates.', cat: 'Streaming', code: `
  const [trials,setTrials]=useState([{service:'Netflix',start:'2026-02-01',days:30}])
  const add = () => setTrials([...trials,{service:'New Service',start:new Date().toISOString().split('T')[0],days:7}])
  const remove = (i:number) => setTrials(trials.filter((_,idx)=>idx!==i))
  const update = (i:number,f:string,v:any) => {const t=[...trials];(t[i] as any)[f]=v;setTrials(t)}
  return (<>
    <div className="space-y-3">{trials.map((t,i) => {const end = new Date(new Date(t.start).getTime()+t.days*86400000); const daysLeft = Math.ceil((end.getTime()-Date.now())/86400000); return <div key={i} className="bg-cream rounded-xl p-4"><div className="flex gap-3 mb-2"><input type="text" value={t.service} onChange={e=>update(i,'service',e.target.value)} className="flex-1 border border-light-gray rounded px-3 py-1 text-sm" placeholder="Service"/><button onClick={()=>remove(i)} className="text-red-400">✕</button></div><div className="grid grid-cols-2 gap-2 text-sm"><div><input type="date" value={t.start} onChange={e=>update(i,'start',e.target.value)} className="w-full border border-light-gray rounded px-2 py-1"/></div><div><input type="number" min={1} value={t.days} onChange={e=>update(i,'days',+e.target.value)} className="w-full border border-light-gray rounded px-2 py-1"/></div></div><div className={`mt-2 text-sm font-medium ${daysLeft <= 3 ? 'text-red-600' : 'text-warm-gray'}`}>Ends {end.toLocaleDateString()} ({daysLeft} days left)</div></div>})}</div>
    <button onClick={add} className="w-full mt-4 border-2 border-dashed border-light-gray rounded-xl py-3 text-sm text-warm-gray hover:border-gold hover:text-gold">+ Add Trial</button>
  </>)` },
  
  { dir: 'streaming', name: 'WatchPartySync', title: 'Watch Party Time Sync', desc: 'Coordinate watch party times across time zones.', cat: 'Streaming', code: `
  const [time,setTime]=useState('20:00')
  const [tz,setTz]=useState('EST')
  const zones = ['PST','MST','CST','EST','GMT','CET']
  const offsets = {'PST':-8,'MST':-7,'CST':-6,'EST':-5,'GMT':0,'CET':1}
  const baseOffset = offsets[tz as keyof typeof offsets] || 0
  const [h,m] = time.split(':').map(Number)
  const baseMin = h * 60 + m
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Your Time</label><input type="time" value={time} onChange={e=>setTime(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Your Timezone</label><select value={tz} onChange={e=>setTz(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{zones.map(z => <option key={z} value={z}>{z}</option>)}</select></div></div>
    <div className="mt-6 space-y-2">{zones.filter(z=>z!==tz).map(z => {const diff = (offsets[z as keyof typeof offsets]||0) - baseOffset; const newMin = baseMin + diff*60; const newH = Math.floor((newMin+1440)%1440/60); const newM = (newMin+1440)%60; return <div key={z} className="flex justify-between items-center bg-cream rounded-lg p-3"><span className="font-medium">{z}</span><span className="text-purple font-bold">{String(newH).padStart(2,'0')}:{String(newM).padStart(2,'0')}</span></div>})}</div>
  </>)` },
  
  { dir: 'streaming', name: 'ContentReleaseCalendar', title: 'Streaming Content Release Calendar', desc: 'Track upcoming content releases on streaming platforms.', cat: 'Streaming', code: `
  const releases = [{title:'Stranger Things S5',date:'2026-03-15',service:'Netflix'},{title:'The Last of Us S2',date:'2026-04-20',service:'HBO Max'},{title:'The Mandalorian S4',date:'2026-05-01',service:'Disney+'},{title:'The Boys S5',date:'2026-06-10',service:'Prime Video'}]
  const [filter,setFilter]=useState('all')
  const filtered = filter === 'all' ? releases : releases.filter(r=>r.service===filter)
  const services = ['all','Netflix','HBO Max','Disney+','Prime Video']
  return (<>
    <div><label className="block text-sm font-medium mb-1">Filter by Service</label><select value={filter} onChange={e=>setFilter(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{services.map(s => <option key={s} value={s}>{s === 'all' ? 'All Services' : s}</option>)}</select></div>
    <div className="mt-6 space-y-3">{filtered.map(r => {const daysUntil = Math.ceil((new Date(r.date).getTime()-Date.now())/86400000); return <div key={r.title} className="bg-cream rounded-xl p-4"><div className="flex justify-between items-start"><div><div className="font-semibold text-purple">{r.title}</div><div className="text-sm text-warm-gray mt-1">{r.service}</div></div><div className="text-right"><div className="text-sm font-medium">{new Date(r.date).toLocaleDateString('en-US',{month:'short',day:'numeric'})}</div><div className="text-xs text-warm-gray">{daysUntil}d</div></div></div></div>})}</div>
  </>)` },

  // Art (5 tools)
  { dir: 'art', name: 'ColorPaletteGenerator', title: 'Art Color Palette Generator', desc: 'Generate color palettes inspired by famous artworks.', cat: 'Art', code: `
  const palettes: Record<string,{colors:string[],desc:string}> = {starry:{colors:['#1E3A8A','#FFD700','#FFA500','#2C5F2D','#0F1419'],desc:'Starry Night by Van Gogh'},scream:{colors:['#FF6B35','#F7931E','#004E89','#1A1A2E'],desc:'The Scream by Munch'},waterlilies:{colors:['#6B8E23','#98D8C8','#4A5D23','#FFE5B4'],desc:'Water Lilies by Monet'},guernica:{colors:['#000000','#FFFFFF','#808080','#404040'],desc:'Guernica by Picasso'}}
  const [selected,setSelected]=useState('starry')
  const p = palettes[selected]
  return (<>
    <div><label className="block text-sm font-medium mb-1">Art Inspiration</label><select value={selected} onChange={e=>setSelected(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{Object.entries(palettes).map(([k,v]) => <option key={k} value={k}>{v.desc}</option>)}</select></div>
    <div className="mt-6"><div className="text-sm font-medium mb-2 text-warm-gray">{p.desc}</div><div className="grid grid-cols-5 gap-2 h-32">{p.colors.map(c => <div key={c} className="rounded-lg" style={{backgroundColor:c}} title={c}/>)}</div><div className="mt-3 flex flex-wrap gap-2">{p.colors.map(c => <div key={c} className="text-xs font-mono bg-cream px-2 py-1 rounded">{c}</div>)}</div></div>
  </>)` },
  
  { dir: 'art', name: 'ArtStyleIdentifier', title: 'Art Style Period Identifier', desc: 'Identify art movements and styles by characteristics.', cat: 'Art', code: `
  const [colors,setColors]=useState('vibrant')
  const [subject,setSubject]=useState('abstract')
  const [technique,setTechnique]=useState('loose')
  const styles: Record<string,string> = {'vibrant-abstract-loose':'Abstract Expressionism','muted-realistic-detailed':'Realism','vibrant-figurative-loose':'Impressionism','dark-abstract-detailed':'Surrealism','bright-geometric-detailed':'Art Deco'}
  const key = colors+'-'+subject+'-'+technique
  const result = styles[key] || 'Contemporary/Mixed Style'
  return (<>
    <div className="space-y-4">{[{l:'Color Palette',v:colors,s:setColors,opts:['vibrant','muted','dark','bright']},{l:'Subject Matter',v:subject,s:setSubject,opts:['abstract','realistic','figurative','geometric']},{l:'Technique',v:technique,s:setTechnique,opts:['loose','detailed','minimalist']}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><select value={i.v} onChange={e=>i.s(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{i.opts.map(o => <option key={o} value={o}>{o.charAt(0).toUpperCase()+o.slice(1)}</option>)}</select></div>)}</div>
    <div className="mt-6 bg-purple text-white rounded-xl p-6 text-center"><div className="text-2xl font-bold">{result}</div></div>
  </>)` },
  
  { dir: 'art', name: 'GalleryVisitPlanner', title: 'Art Gallery Visit Planner', desc: 'Plan your museum visit with time estimates per section.', cat: 'Art', code: `
  const [exhibitions,setExhibitions]=useState(4)
  const [minutesPer,setMinutesPer]=useState(25)
  const [breakMin,setBreakMin]=useState(15)
  const total = exhibitions * minutesPer + (exhibitions - 1) * breakMin
  const hours = Math.floor(total / 60)
  const mins = total % 60
  return (<>
    <div className="grid grid-cols-3 gap-4">{[{l:'Exhibitions',v:exhibitions,s:setExhibitions},{l:'Minutes/Exhibition',v:minutesPer,s:setMinutesPer},{l:'Break (min)',v:breakMin,s:setBreakMin}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={1} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center text-white"><div className="text-4xl font-bold">{hours}h {mins}m</div><div className="text-white/90 mt-2">Total Visit Time</div></div>
  </>)` },
  
  { dir: 'art', name: 'ArtworkValueEstimator', title: 'Artwork Value Estimator', desc: 'Estimate artwork value based on artist, size, and condition.', cat: 'Art', code: `
  const [artistFame,setArtistFame]=useState('emerging')
  const [size,setSize]=useState('medium')
  const [condition,setCondition]=useState('excellent')
  const [year,setYear]=useState(2020)
  const fameM = {emerging:1,established:5,renowned:15,master:50}
  const sizeM = {small:1,medium:2,large:4,monumental:8}
  const condM = {poor:0.3,fair:0.6,good:1,excellent:1.5,mint:2}
  const age = 2026 - year
  const base = 500 * (fameM[artistFame as keyof typeof fameM]||1) * (sizeM[size as keyof typeof sizeM]||1) * (condM[condition as keyof typeof condM]||1) * (1 + age * 0.05)
  return (<>
    <div className="grid grid-cols-2 gap-4">{[{l:'Artist Fame',v:artistFame,s:setArtistFame,opts:Object.keys(fameM)},{l:'Size',v:size,s:setSize,opts:Object.keys(sizeM)},{l:'Condition',v:condition,s:setCondition,opts:Object.keys(condM)}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><select value={i.v} onChange={e=>i.s(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{i.opts.map(o => <option key={o} value={o}>{o.charAt(0).toUpperCase()+o.slice(1)}</option>)}</select></div>)}<div><label className="block text-sm font-medium mb-1">Creation Year</label><input type="number" min={1900} max={2026} value={year} onChange={e=>setYear(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div></div>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center text-white"><div className="text-4xl font-bold">${Math.round(base).toLocaleString()}</div><div className="text-white/90 mt-2">Estimated Value</div></div>
  </>)` },
  
  { dir: 'art', name: 'CanvasSizeCalculator', title: 'Canvas Size & Material Calculator', desc: 'Calculate canvas dimensions and material costs for paintings.', cat: 'Art', code: `
  const [width,setWidth]=useState(24)
  const [height,setHeight]=useState(36)
  const [unit,setUnit]=useState('inches')
  const [material,setMaterial]=useState('canvas')
  const sqIn = unit === 'inches' ? width * height : width * height * 2.54 * 2.54
  const materials: Record<string,number> = {canvas:0.5,panel:0.7,paper:0.2,linen:1.2}
  const cost = sqIn * (materials[material]||0.5) / 144
  return (<>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4"><div><label className="block text-sm font-medium mb-1">Width</label><input type="number" min={1} value={width} onChange={e=>setWidth(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Height</label><input type="number" min={1} value={height} onChange={e=>setHeight(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Unit</label><select value={unit} onChange={e=>setUnit(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="inches">Inches</option><option value="cm">Centimeters</option></select></div><div className="col-span-2 sm:col-span-3"><label className="block text-sm font-medium mb-1">Material</label><select value={material} onChange={e=>setMaterial(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{Object.keys(materials).map(m => <option key={m} value={m}>{m.charAt(0).toUpperCase()+m.slice(1)}</option>)}</select></div></div>
    <div className="grid grid-cols-2 gap-4 mt-6">{[{l:'Area',v:sqIn.toFixed(1)+' sq in'},{l:'Est. Cost',v:'$'+cost.toFixed(2)}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
  </>)` },

  // Celebrity (5 tools)
  { dir: 'celebrity', name: 'CelebrityNetWorth', title: 'Celebrity Net Worth Tracker', desc: 'Track and compare celebrity net worth estimates.', cat: 'Celebrity', code: `
  const celebs = [{name:'Taylor Swift',worth:1100},{name:'Jay-Z',worth:2500},{name:'Beyoncé',worth:800},{name:'Kim Kardashian',worth:1700},{name:'Kanye West',worth:400},{name:'Rihanna',worth:1400},{name:'Tom Cruise',worth:600},{name:'Dwayne Johnson',worth:800}]
  const [selected,setSelected]=useState(['Taylor Swift','Rihanna'])
  const toggle = (n:string) => setSelected(p => p.includes(n) ? p.filter(x=>x!==n) : [...p,n])
  const selectedData = celebs.filter(c=>selected.includes(c.name)).sort((a,b)=>b.worth-a.worth)
  return (<>
    <div className="grid grid-cols-2 gap-2 mb-4">{celebs.map(c => <button key={c.name} onClick={()=>toggle(c.name)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selected.includes(c.name) ? 'bg-gold text-white' : 'bg-cream text-charcoal hover:bg-gold-light'}`}>{c.name}</button>)}</div>
    <div className="space-y-2">{selectedData.map((c,i) => <div key={c.name} className="flex items-center gap-3 bg-cream rounded-xl p-4"><div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-white font-bold text-sm">{i+1}</div><div className="flex-1"><div className="font-semibold text-purple">{c.name}</div><div className="text-sm text-warm-gray">${c.worth}M net worth</div></div></div>)}</div>
  </>)` },
  
  { dir: 'celebrity', name: 'FanEngagementCalc', title: 'Social Media Engagement Calculator', desc: 'Calculate celebrity social media engagement rates.', cat: 'Celebrity', code: `
  const [followers,setFollowers]=useState(10000000)
  const [likes,setLikes]=useState(500000)
  const [comments,setComments]=useState(50000)
  const [shares,setShares]=useState(25000)
  const totalEng = likes + comments + shares
  const engRate = (totalEng / followers * 100).toFixed(2)
  const rating = +engRate > 5 ? 'Excellent' : +engRate > 3 ? 'Good' : +engRate > 1 ? 'Average' : 'Low'
  return (<>
    <div className="grid grid-cols-2 gap-4">{[{l:'Followers',v:followers,s:setFollowers},{l:'Likes',v:likes,s:setLikes},{l:'Comments',v:comments,s:setComments},{l:'Shares',v:shares,s:setShares}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={0} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="grid grid-cols-2 gap-4 mt-6">{[{l:'Engagement Rate',v:engRate+'%'},{l:'Rating',v:rating}].map(x => <div key={x.l} className="bg-gold rounded-xl p-4 text-center text-white"><div className="text-3xl font-bold">{x.v}</div><div className="text-white/90 text-sm">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'celebrity', name: 'RedCarpetAnalyzer', title: 'Red Carpet Fashion Analyzer', desc: 'Analyze and rate red carpet fashion choices.', cat: 'Celebrity', code: `
  const [designer,setDesigner]=useState('')
  const [color,setColor]=useState('black')
  const [style,setStyle]=useState('gown')
  const [accessories,setAccessories]=useState(3)
  const colors = ['black','white','red','blue','gold','silver','green','pink']
  const styles = ['gown','suit','cocktail','jumpsuit']
  const score = (color === 'red' || color === 'gold' ? 25 : 15) + (style === 'gown' ? 20 : 15) + Math.min(accessories * 5, 20) + (designer.length > 0 ? 20 : 0)
  const rating = score >= 80 ? 'Best Dressed!' : score >= 60 ? 'Stunning' : score >= 40 ? 'Fashionable' : 'Safe Choice'
  return (<>
    <div className="grid grid-cols-2 gap-4"><div className="col-span-2"><label className="block text-sm font-medium mb-1">Designer</label><input type="text" value={designer} onChange={e=>setDesigner(e.target.value)} placeholder="e.g., Valentino" className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Color</label><select value={color} onChange={e=>setColor(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{colors.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase()+c.slice(1)}</option>)}</select></div><div><label className="block text-sm font-medium mb-1">Style</label><select value={style} onChange={e=>setStyle(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{styles.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}</select></div><div><label className="block text-sm font-medium mb-1">Accessories</label><input type="number" min={0} max={10} value={accessories} onChange={e=>setAccessories(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div></div>
    <div className="mt-6 bg-purple text-white rounded-xl p-6 text-center"><div className="text-4xl font-bold">{score}/100</div><div className="text-xl mt-2">{rating}</div></div>
  </>)` },
  
  { dir: 'celebrity', name: 'AwardWinPredictor', title: 'Award Win Probability', desc: 'Predict likelihood of winning major entertainment awards.', cat: 'Celebrity', code: `
  const [nominations,setNominations]=useState(3)
  const [buzz,setBuzz]=useState(7)
  const [pastWins,setPastWins]=useState(1)
  const [category,setCategory]=useState('lead')
  const catMult = category === 'lead' ? 1.2 : 1.0
  const prob = Math.min(95, Math.max(5, (nominations * 10 + buzz * 8 + pastWins * 12) * catMult))
  return (<>
    <div className="grid grid-cols-2 gap-4">{[{l:'Nominations',v:nominations,s:setNominations},{l:'Industry Buzz (1-10)',v:buzz,s:setBuzz,max:10},{l:'Past Wins',v:pastWins,s:setPastWins}].map(i => <div key={i.l}><label className="block text-sm font-medium mb-1">{i.l}</label><input type="number" min={0} max={i.max} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}<div><label className="block text-sm font-medium mb-1">Category</label><select value={category} onChange={e=>setCategory(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="lead">Lead Role</option><option value="supporting">Supporting</option></select></div></div>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center text-white"><div className="text-5xl font-bold">{Math.round(prob)}%</div><div className="text-white/90 mt-2">Win Probability</div></div>
  </>)` },
  
  { dir: 'celebrity', name: 'FanMeetingCostCalc', title: 'Fan Meeting Cost Calculator', desc: 'Calculate costs for attending celebrity fan meetings and events.', cat: 'Celebrity', code: `
  const [ticket,setTicket]=useState(200)
  const [travel,setTravel]=useState(300)
  const [hotel,setHotel]=useState(150)
  const [merchandise,setMerchandise]=useState(100)
  const [photo,setPhoto]=useState(50)
  const total = ticket + travel + hotel + merchandise + photo
  return (<>
    <div className="space-y-3">{[{l:'Event Ticket',v:ticket,s:setTicket},{l:'Travel',v:travel,s:setTravel},{l:'Hotel',v:hotel,s:setHotel},{l:'Merchandise',v:merchandise,s:setMerchandise},{l:'Photo Op',v:photo,s:setPhoto}].map(i => <div key={i.l} className="flex justify-between items-center"><label className="text-sm font-medium">{i.l}</label><input type="number" min={0} value={i.v} onChange={e=>i.s(+e.target.value)} className="w-32 border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div>)}</div>
    <div className="mt-6 bg-purple text-white rounded-xl p-6 text-center"><div className="text-4xl font-bold">${total}</div><div className="text-white/90 mt-2">Total Cost</div></div>
  </>)` },

  // General (10+ tools)
  { dir: 'general', name: 'TicketPriceEstimator', title: 'Event Ticket Price Estimator', desc: 'Estimate fair ticket prices for concerts, shows, and events.', cat: 'General', code: `
  const [eventType,setEventType]=useState('concert')
  const [venueCap,setVenueCap]=useState(5000)
  const [popularity,setPopularity]=useState(8)
  const types: Record<string,number> = {concert:50,theater:40,comedy:30,sports:60,festival:100}
  const base = (types[eventType]||50) * (popularity / 5) * (venueCap < 2000 ? 1.5 : venueCap < 10000 ? 1.0 : 0.7)
  const range = {low:Math.round(base*0.7),mid:Math.round(base),high:Math.round(base*1.8)}
  return (<>
    <div className="grid grid-cols-3 gap-4"><div><label className="block text-sm font-medium mb-1">Event Type</label><select value={eventType} onChange={e=>setEventType(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">{Object.keys(types).map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase()+t.slice(1)}</option>)}</select></div><div><label className="block text-sm font-medium mb-1">Venue Capacity</label><input type="number" min={100} value={venueCap} onChange={e=>setVenueCap(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Popularity (1-10)</label><input type="number" min={1} max={10} value={popularity} onChange={e=>setPopularity(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div></div>
    <div className="mt-6 space-y-2">{Object.entries(range).map(([tier,price]) => <div key={tier} className="flex justify-between items-center bg-cream rounded-lg p-4"><span className="font-medium capitalize">{tier} Tier</span><span className="text-2xl font-bold text-purple">${price}</span></div>)}</div>
  </>)` },
  
  { dir: 'general', name: 'FestivalPackingList', title: 'Festival Packing List Generator', desc: 'Generate customized packing lists for music/film festivals.', cat: 'General', code: `
  const [type,setType]=useState('music')
  const [days,setDays]=useState(3)
  const [camping,setCamping]=useState(false)
  const essentials = ['Tickets','ID','Phone charger','Sunscreen','Water bottle']
  const music = ['Earplugs','Comfortable shoes','Cash','Bandana']
  const film = ['Notebook','Pen','Business cards','Comfortable layers']
  const campGear = ['Tent','Sleeping bag','Flashlight','Toiletries']
  const list = [...essentials, ...(type==='music'?music:film), ...(camping?campGear:[])]
  return (<>
    <div className="grid grid-cols-3 gap-4"><div><label className="block text-sm font-medium mb-1">Festival Type</label><select value={type} onChange={e=>setType(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="music">Music</option><option value="film">Film</option></select></div><div><label className="block text-sm font-medium mb-1">Days</label><input type="number" min={1} max={10} value={days} onChange={e=>setDays(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div className="flex items-center gap-2 pt-6"><input type="checkbox" checked={camping} onChange={e=>setCamping(e.target.checked)} className="w-5 h-5 accent-gold"/><label className="text-sm font-medium">Camping</label></div></div>
    <div className="mt-6 bg-cream rounded-xl p-4"><div className="font-medium mb-3">Packing List ({list.length} items)</div><div className="grid grid-cols-2 gap-2">{list.map(item => <div key={item} className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-gold rounded"></div><span className="text-sm">{item}</span></div>)}</div></div>
  </>)` },
  
  { dir: 'general', name: 'PopCultureQuiz', title: 'Pop Culture Quiz Generator', desc: 'Generate random pop culture trivia questions.', cat: 'General', code: `
  const questions = [{q:'What year did the first Star Wars movie release?',a:'1977'},{q:'Who painted the Mona Lisa?',a:'Leonardo da Vinci'},{q:'What is the highest-grossing film of all time?',a:'Avatar'},{q:'How many Harry Potter books are there?',a:'7'},{q:'What year did The Beatles break up?',a:'1970'},{q:'Who directed Pulp Fiction?',a:'Quentin Tarantino'},{q:'What is Beyoncé\\'s full name?',a:'Beyoncé Giselle Knowles-Carter'},{q:'How many strings does a guitar have?',a:'6'}]
  const [current,setCurrent]=useState(0)
  const [revealed,setRevealed]=useState(false)
  const next = () => {setCurrent((c+1)%questions.length);setRevealed(false)}
  const c = questions[current]
  return (<>
    <div className="bg-purple text-white rounded-2xl p-8"><div className="text-sm text-white/80 mb-4">Question {current+1}/{questions.length}</div><div className="text-xl font-medium mb-6">{c.q}</div>{revealed ? <div className="bg-white/20 rounded-lg p-4"><div className="text-sm text-white/80 mb-1">Answer:</div><div className="text-2xl font-bold">{c.a}</div></div> : <button onClick={()=>setRevealed(true)} className="gold-gradient text-white px-6 py-3 rounded-xl font-medium hover:opacity-90">Reveal Answer</button>}</div>
    <button onClick={next} className="w-full mt-4 border border-gold text-gold px-6 py-3 rounded-xl font-medium hover:bg-gold hover:text-white transition-colors">Next Question</button>
  </>)` },
  
  { dir: 'general', name: 'MerchBudgetPlanner', title: 'Merchandise Budget Planner', desc: 'Plan your budget for event merchandise and collectibles.', cat: 'General', code: `
  const [tshirt,setTshirt]=useState(35)
  const [poster,setPoster]=useState(20)
  const [vinyl,setVinyl]=useState(40)
  const [misc,setMisc]=useState(25)
  const [qty,setQty]=useState({tshirt:1,poster:1,vinyl:1,misc:1})
  const total = tshirt*qty.tshirt + poster*qty.poster + vinyl*qty.vinyl + misc*qty.misc
  return (<>
    <div className="space-y-3">{[{l:'T-Shirt',p:tshirt,setP:setTshirt,k:'tshirt'},{l:'Poster',p:poster,setP:setPoster,k:'poster'},{l:'Vinyl/CD',p:vinyl,setP:setVinyl,k:'vinyl'},{l:'Misc Item',p:misc,setP:setMisc,k:'misc'}].map(i => <div key={i.k} className="bg-cream rounded-lg p-3"><div className="flex justify-between mb-2"><span className="font-medium">{i.l}</span><input type="number" min={0} step={0.01} value={i.p} onChange={e=>i.setP(+e.target.value)} className="w-20 border border-light-gray rounded px-2 py-1 text-sm"/></div><div className="flex items-center gap-2"><span className="text-sm text-warm-gray">Qty:</span><button onClick={()=>setQty({...qty,[i.k]:Math.max(0,qty[i.k as keyof typeof qty]-1)})} className="w-6 h-6 rounded bg-light-gray hover:bg-gold-light text-sm">-</button><span className="w-8 text-center">{qty[i.k as keyof typeof qty]}</span><button onClick={()=>setQty({...qty,[i.k]:qty[i.k as keyof typeof qty]+1})} className="w-6 h-6 rounded bg-light-gray hover:bg-gold-light text-sm">+</button></div></div>)}</div>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center text-white"><div className="text-4xl font-bold">${total.toFixed(2)}</div><div className="text-white/90 mt-2">Total Budget</div></div>
  </>)` },
  
  { dir: 'general', name: 'WatchlistOrganizer', title: 'Watch/Read/Listen List Organizer', desc: 'Organize your media watchlist with priorities and status.', cat: 'General', code: `
  const [items,setItems]=useState([{title:'Dune',type:'movie',priority:'high',status:'todo'}])
  const [newTitle,setNewTitle]=useState('')
  const [newType,setNewType]=useState('movie')
  const add = () => {if(newTitle.trim()){setItems([...items,{title:newTitle,type:newType,priority:'medium',status:'todo'}]);setNewTitle('')}}
  const remove = (i:number) => setItems(items.filter((_,idx)=>idx!==i))
  const updateStatus = (i:number,s:string) => {const its=[...items];its[i].status=s;setItems(its)}
  return (<>
    <div className="flex gap-2 mb-4"><input type="text" value={newTitle} onChange={e=>setNewTitle(e.target.value)} onKeyPress={e=>e.key==='Enter'&&add()} placeholder="Title" className="flex-1 border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/><select value={newType} onChange={e=>setNewType(e.target.value)} className="border border-light-gray rounded-lg px-3 py-2"><option value="movie">Movie</option><option value="show">Show</option><option value="book">Book</option><option value="album">Album</option></select><button onClick={add} className="gold-gradient text-white px-4 py-2 rounded-lg">+</button></div>
    <div className="space-y-2">{items.map((it,i) => <div key={i} className="flex items-center gap-2 bg-cream rounded-lg p-3"><div className="flex-1"><div className="font-medium text-purple">{it.title}</div><div className="text-xs text-warm-gray capitalize">{it.type}</div></div><select value={it.status} onChange={e=>updateStatus(i,e.target.value)} className="text-xs border border-light-gray rounded px-2 py-1"><option value="todo">To Do</option><option value="inprogress">In Progress</option><option value="done">Done</option></select><button onClick={()=>remove(i)} className="text-red-400">✕</button></div>)}</div>
  </>)` },
  
  { dir: 'general', name: 'SpoilerFreeTimer', title: 'Spoiler-Free Content Timer', desc: 'Time when you can safely browse social media after a release.', cat: 'General', code: `
  const [releaseDate,setReleaseDate]=useState('2026-02-15')
  const [safetyDays,setSafetyDays]=useState(7)
  const release = new Date(releaseDate).getTime()
  const safe = new Date(release + safetyDays*86400000)
  const now = Date.now()
  const isSafe = now >= safe.getTime()
  const daysLeft = Math.ceil((safe.getTime() - now) / 86400000)
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Release Date</label><input type="date" value={releaseDate} onChange={e=>setReleaseDate(e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Safety Window (days)</label><input type="number" min={1} max={30} value={safetyDays} onChange={e=>setSafetyDays(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div></div>
    <div className={`mt-6 rounded-xl p-6 text-center text-white ${isSafe ? 'bg-green-500' : 'bg-red-500'}`}><div className="text-4xl font-bold mb-2">{isSafe ? '✓ SAFE' : '⚠ DANGER'}</div><div>{isSafe ? 'You can browse safely!' : daysLeft+' days until safe'}</div></div>
  </>)` },
  
  { dir: 'general', name: 'MediaMarathonPlanner', title: 'Media Marathon Scheduler', desc: 'Plan marathons across movies, shows, books, and albums.', cat: 'General', code: `
  const [type,setType]=useState('movies')
  const [count,setCount]=useState(5)
  const [avgDur,setAvgDur]=useState(120)
  const totalMin = count * avgDur
  const hours = Math.floor(totalMin / 60)
  const mins = totalMin % 60
  const withBreaks = totalMin + (count-1)*15
  return (<>
    <div className="grid grid-cols-3 gap-4"><div><label className="block text-sm font-medium mb-1">Type</label><select value={type} onChange={e=>setType(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"><option value="movies">Movies</option><option value="episodes">Episodes</option><option value="albums">Albums</option></select></div><div><label className="block text-sm font-medium mb-1">Count</label><input type="number" min={1} value={count} onChange={e=>setCount(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Avg Duration (min)</label><input type="number" min={1} value={avgDur} onChange={e=>setAvgDur(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div></div>
    <div className="grid grid-cols-2 gap-4 mt-6">{[{l:'Total Time',v:hours+'h '+mins+'m'},{l:'With Breaks',v:Math.floor(withBreaks/60)+'h '+(withBreaks%60)+'m'}].map(x => <div key={x.l} className="bg-cream rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple">{x.v}</div><div className="text-sm text-warm-gray">{x.l}</div></div>)}</div>
  </>)` },
  
  { dir: 'general', name: 'ReviewAggregator', title: 'Multi-Platform Review Aggregator', desc: 'Aggregate and average reviews from multiple sources.', cat: 'General', code: `
  const [reviews,setReviews]=useState([{source:'User A',score:8},{source:'User B',score:9}])
  const add = () => setReviews([...reviews,{source:'New Review',score:7}])
  const remove = (i:number) => setReviews(reviews.filter((_,idx)=>idx!==i))
  const update = (i:number,k:string,v:any) => {const r=[...reviews];(r[i] as any)[k]=v;setReviews(r)}
  const avg = reviews.length > 0 ? (reviews.reduce((s,r)=>s+r.score,0) / reviews.length).toFixed(1) : '—'
  return (<>
    <div className="space-y-2">{reviews.map((r,i) => <div key={i} className="flex gap-2 items-center bg-cream rounded-lg p-3"><input type="text" value={r.source} onChange={e=>update(i,'source',e.target.value)} className="flex-1 border border-light-gray rounded px-3 py-1 text-sm"/><input type="number" min={0} max={10} step={0.1} value={r.score} onChange={e=>update(i,'score',+e.target.value)} className="w-16 border border-light-gray rounded px-2 py-1 text-sm"/><button onClick={()=>remove(i)} className="text-red-400">✕</button></div>)}</div>
    <button onClick={add} className="w-full mt-3 border-2 border-dashed border-light-gray rounded-xl py-2 text-sm text-warm-gray hover:border-gold hover:text-gold">+ Add Review</button>
    <div className="mt-6 bg-gold rounded-xl p-6 text-center text-white"><div className="text-5xl font-bold">{avg}/10</div><div className="text-white/90 mt-2">Average Score ({reviews.length} reviews)</div></div>
  </>)` },
  
  { dir: 'general', name: 'CulturalEventCalendar', title: 'Cultural Event Countdown', desc: 'Track countdowns to major cultural events and releases.', cat: 'General', code: `
  const events = [{name:'Oscars 2026',date:'2026-03-28'},{name:'Coachella 2026',date:'2026-04-15'},{name:'Met Gala',date:'2026-05-04'},{name:'Comic-Con',date:'2026-07-23'},{name:'Venice Film Festival',date:'2026-09-02'}]
  const now = Date.now()
  const upcoming = events.map(e => ({...e,days:Math.ceil((new Date(e.date).getTime()-now)/86400000)})).filter(e=>e.days>=0).sort((a,b)=>a.days-b.days)
  return (<>
    <div className="space-y-3">{upcoming.map(e => <div key={e.name} className="flex justify-between items-center bg-cream rounded-xl p-4"><div><div className="font-semibold text-purple">{e.name}</div><div className="text-sm text-warm-gray">{new Date(e.date).toLocaleDateString('en-US',{month:'long',day:'numeric'})}</div></div><div className="text-right"><div className="text-3xl font-bold text-gold">{e.days}</div><div className="text-xs text-warm-gray">days</div></div></div>)}</div>
  </>)` },
  
  { dir: 'general', name: 'SubtitleSpeedCalc', title: 'Subtitle Reading Speed Calculator', desc: 'Calculate if subtitle display speed is comfortable for reading.', cat: 'General', code: `
  const [wordsPerSub,setWordsPerSub]=useState(12)
  const [displaySec,setDisplaySec]=useState(3)
  const wpm = Math.round(wordsPerSub / displaySec * 60)
  const comfort = wpm < 180 ? 'Comfortable' : wpm < 220 ? 'Fast' : wpm < 260 ? 'Very Fast' : 'Too Fast!'
  const color = wpm < 180 ? 'green' : wpm < 220 ? 'yellow' : wpm < 260 ? 'orange' : 'red'
  return (<>
    <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Words per Subtitle</label><input type="number" min={1} value={wordsPerSub} onChange={e=>setWordsPerSub(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div><div><label className="block text-sm font-medium mb-1">Display Time (seconds)</label><input type="number" min={0.5} step={0.1} value={displaySec} onChange={e=>setDisplaySec(+e.target.value)} className="w-full border border-light-gray rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"/></div></div>
    <div className="mt-6 grid grid-cols-2 gap-4"><div className={\`bg-\${color}-50 rounded-xl p-4 text-center\`}><div className={\`text-3xl font-bold text-\${color}-700\`}>{wpm} WPM</div><div className="text-sm text-warm-gray mt-1">Reading Speed</div></div><div className="bg-cream rounded-xl p-4 text-center"><div className="text-3xl font-bold text-purple">{comfort}</div><div className="text-sm text-warm-gray mt-1">Comfort Level</div></div></div>
  </>)` },
];

const baseDir = '/home/ubuntu/.openclaw/workspace/website-farm/sites/lumierepost/src/tools';

toolsData.forEach(tool => {
  const dir = `${baseDir}/${tool.dir}`;
  const filePath = `${dir}/${tool.name}.tsx`;
  
  const content = `import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'

export default function ${tool.name}() {${tool.code}
  return (
    <ToolLayout title="${tool.title}" description="${tool.desc}" category="${tool.cat}">
      <div className="space-y-6">
        {/* Tool implementation above in return */}
      </div>
    </ToolLayout>
  )
}
`;
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ ${tool.name}`);
});

console.log(`\n✅ Generated ${toolsData.length} tools`);
