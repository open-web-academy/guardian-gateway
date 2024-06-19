export default {
    familiarWD:`const name = props.name || 'Maria';
const [count, setCount] = useState(1);

return (
  <div>
    <p> {count} cheers for {name}! </p>
    <button onClick={() => setCount(count + 1)}>Cheers!</button>
  </div>
);
    `,
    nearNative:`const counter = Near.view('counter.near-examples.testnet', 'get_num')

if(counter === null) return 'Loading...'

const add = () => {
  Near.call('counter.near-examples.testnet', 'increment')
}

const subtract = () => {
  Near.call('counter.near-examples.testnet', 'decrement')
}

return <>
  <p> Counter: {counter} </p>
  {!context.accountId &&
    <p color='red'> Please login to interact with the contract</p>
  }
  {context.accountId && 
  <>
    <button onClick={add}> + </button>
    <button onClick={subtract}> - </button>
  </>
  }
</>`,
socialGetGo:`const item = (blockHeight) => ({ type: 'social', path: 'influencer.testnet/post/main', blockHeight });

// retrieve indexed posts by influencer.testnet
const idx_posts = Social.index(
  'post', 'main', { accountId: ['influencer.testnet'] }
);

if (idx_posts === null) return 'Loading...';

// retrieve likes for each post
const likes = idx_posts.map(
  index => Social.index('like', item(index.blockHeight)).length
);

// retrieve data for each post
const post_data = idx_posts.map(
  index => Social.get('influencer.testnet/post/main', index.blockHeight)
);

// defined 'Like' function
const like = (blockHeight) => Social.set(
  {index:{like: JSON.stringify({key: item(blockHeight), value: {type: 'like'}})}}
)

return <>
  <h5>Posts from <i>influencer.testnet</i></h5>
  {post_data.map((post, idx) =>
    <div className='mt-3'>
      <div>{JSON.parse(post).text} - {likes[idx]} likes</div>
      {context.accountId && <button className='btn btn-danger btn-sm' onClick={() => like(idx_posts[idx].blockHeight)}>Like</button>}
    </div>
  )}
</>

`,

codeOnchain:`// retrieving the code of a stored component
return Social.get('leinss.near/widget/Greeter')
`,

deployed:`// Rendering the component with props
return <Widget src="leinss.near/widget/Greeter"
               props={{name: "Anna"}} />;
`,
state:`const [count, setCount] = useState(0);

return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>
);`,
props:`return <>
  <p> This component props: {JSON.stringify(props)} </p>
  <Widget src="influencer.testnet/widget/Greeter" 
          props={{name: "Maria", amount: 2}} />
</>
`,
useEffect:`const [count, setCount] = useState(0);
const [visible, setVisible] = useState(false);

useEffect(() => {
  if(count > 5) setVisible(true);
}, [count]);

return (
  <div>
    <p>You clicked {count} times</p>
    <p className="alert alert-danger" hidden={!visible}>
      You clicked more than 5 times
    </p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>
);  
`,
import:`const {add, multiply} = VM.require('influencer.testnet/widget/Math');

return <>
  <p> 2 + 3 = {add(2, 3)} </p>
  <p> 2 * 3 = {multiply(2, 3)} </p>
</>`,
importCode:`function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

return { add, multiply };`,
fetch:`const res = fetch("https://rpc.mainnet.near.org/status");

return res.body;
`,
asyncFetch:`const [uptime, setUptime] = useState(null);

function reportUptime() {
  const promise = asyncFetch("https://rpc.mainnet.near.org/status")
  
  promise.then(
    res => { setUptime(res.body.uptime_sec) }
  );
}

return <>
  <p> {uptime? uptime : 'Fetch a value' } </p>
  <button onClick={reportUptime}>Fetch uptime</button>
</>
`,
cache:`const status = useCache(
  () =>
    asyncFetch("https://rpc.mainnet.near.org/status").then((res) => res.body),
  "mainnetRpcStatus",
  { subscribe: true }
);

return status;`,
localstorage:`const [time, setTime] = useState(stored || Date.now()) 

const storeValue = () => {
  const date = Date.now();
  Storage.set('time_now', date)
}

return <>
  <p> Time Now: {Date.now()} </p>
  <p> Time Stored: {Storage.get('time_now')} </p>
  <button onClick={storeValue}>Store Date.now()</button>
</>`,
clipboard:`const copyToClipboard = (test) => { clipboard.writeText("Hello World!") }

return <>
    <button onClick={copyToClipboard}> Copy </button>
    <textarea className="form-control mt-2" placeholder="Test pasting here" />
</>`,
widget:`const props = { name: "Anna", amount: 3 };

return <Widget src="influencer.testnet/widget/Greeter" props={props} />;`,
ipfsImage:`State.init({image: {}})

return <>
  <p> Raw State: {JSON.stringify(state.image)} </p>
  <IpfsImageUpload image={state.image} />
</>
`,
files:`const [img, setImg] = useState(null);
const [msg, setMsg] = useState('Upload an Image')

const uploadFile = (files) => {
  setMsg('Uploading...')

  const file = fetch(
    "https://ipfs.near.social/add",
    {
      method: "POST",
      headers: { Accept: "application/json" },
      body: files[0]
    }
  )

  setImg(file.body.cid)
  setMsg('Upload an Image')
}

return <>
  <Files
    multiple={false}
    accepts={["image/*"]}
    clickable
    className="btn btn-outline-primary"
    onChange={uploadFile}
  >
    {msg}
  </Files>
  {img ? <div><img src={'https://ipfs.near.social/ipfs/'+img} /></div> : ''}
</>;`,
markdown:`const markdown = ('## A title')
  
  return <Markdown text={markdown} />;`,
overlay:`const [show, setShow] = useState(false);

const overlay = (
  <div className='border m-3 p-3'>
    This is the overlay Message
  </div>
);

return (
  <OverlayTrigger
    show={show}
    delay={{ show: 250, hide: 300 }}
    placement='auto'
    overlay={overlay}
  >
    <button
      className="btn btn-outline-primary"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      Place Mouse Over Me
    </button>
  </OverlayTrigger>
);
`,
infiniteScroll:`const allNumbers = Array.from(Array(100).keys())
const [lastNumber, setLastNumber] = useState(0);
const [display, setDisplay] = useState([]);

const loadNumbers = (page) => {
  const toDisplay = allNumbers
    .slice(0, lastNumber + page*10)
    .map(n => <p>{n}</p>)

  console.log(lastNumber + page*10)
  setDisplay(toDisplay);
  setLastNumber(lastNumber + page*10);
};

return (
  <InfiniteScroll
    loadMore={loadNumbers}
    hasMore={lastNumber < allNumbers.length}
    useWindow={false}
  >
    {display}
  </InfiniteScroll>
);
`,
typeahead:`const [selected, setSelected] = useState([]);
const options = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

return <>
  <Typeahead
    options={options}
    multiple
    onChange={v => setSelected(v)}
    placeholder='Choose a fruit...'
  />
  <hr />
  <p> Selected: {selected.join(', ')} </p>
</>;`,
styledComponent:`const Button = styled.button'background: "palevioletred"';
return (
  <div>
    <Button>Button</Button>
  </div>
);`,
tooltip:`const tooltip = (
  <Tooltip id="tooltip">
    <strong>Holy guacamole!</strong> Check this info.
  </Tooltip>
);

return <>
  <OverlayTrigger placement="left" overlay={tooltip}>
    <button>Holy guacamole!</button>
  </OverlayTrigger>

  <OverlayTrigger placement="top" overlay={tooltip}>
    <button>Holy guacamole!</button>
  </OverlayTrigger>

  <OverlayTrigger placement="bottom" overlay={tooltip}>
    <button>Holy guacamole!</button>
  </OverlayTrigger>

  <OverlayTrigger placement="right" overlay={tooltip}>
    <button>Holy guacamole!</button>
  </OverlayTrigger>
</>`,
view1:`const greeting = Near.view("hello.near-examples.testnet", "get_greeting", {});

if (greeting === null) return "Loading...";

return ('The contract says: '+ greeting);
`,
view2:`const contractGreet = Near.view("hello.near-examples.testnet", "get_greeting", {});

// you need to first check that the value was obtained
if (contractGreet === null) return "Loading...";

const [greeting, setGreeting] = useState(contractGreet);

return ('The contract says: '+ greeting);`,
view3:`const contractGreet = Near.view('hello.near-examples.testnet', 'get_greeting');

const [greeting, setGreeting] = useState('Loading ...');

useEffect(() => {
  if (contractGreet !== null) setGreeting(contractGreet);
}, [contractGreet]);

return ('The contract says: '+ greeting);`,
call:`if (!context.accountId) return "Please login...";

const onClick = () => {
  Near.call(
    "hello.near-examples.testnet",
    "set_greeting",
    { greeting: "Hello!" }
  );
};

return <>
  <h5> Hello {context.accountId} </h5>
  <button onClick={onClick}> Set Greeting </button>
</>;
`,
block:`return Near.block("optimistic");`,
socialGet:`// Ask for the 'profile' key of the influencer.testnet account
const profile = Social.get("influencer.testnet/profile/*");

// Ask a component from the influencer.testnet account
const widget = Social.get("influencer.testnet/widget/Greeter");

if(profile === null || widget === null) return "Loading ..."

return (
  <div>
    <p>Profile: {JSON.stringify(profile)}</p>
    <p>Widgets: {JSON.stringify(widget)} </p>
  </div>
);`,
socialGetr:`const profile = Social.getr("influencer.testnet/profile");

return (
  <div>
    <p>Profile: {JSON.stringify(profile)}</p>
  </div>
);
`,
socialKeys:`const data = Social.keys('influencer.testnet/profile/*', "final");

return JSON.stringify(data)`,
socialSet:`const onClick = () => {
  Social.set({
    post: {
      main: JSON.stringify({
        type: "md",
        text: "I've read the docs!"
      })
    }
  })
}

if(!context.accountId) return "Please login...";

return <>
  <p> Save a message showing some love to the NEAR Docs </p>
  <button onClick={onClick}> Save the Message </button>
</>
`,
socialIndex1:`// General form of an indexed action
// {
//   index: {
//     actionName: JSON.stringify({ key, value })
//   }
// }

const onClick = () => {
  Social.set({
    index: {
      readDocs: JSON.stringify({key: "docs", value: "like"})
    } ,
  })
}

return <>
  {context.accountId ?
  <>
    <p> Index an action showing some love to the NEAR Docs </p>
    <button onClick={onClick}> Index Action </button>
  </> :
  <p> Login to index an action </p>}
</>
`,
standards1:`{
  index: {
    post: JSON.stringify({
      key: "main",
      value: {type: "md"}
    })
  }
}`,
standards2:`{
  index: {
    like: JSON.stringify({
      key: {type: 'social', path: 'influencer.testnet/post/main', blockHeight: 152959480 },
      value: {type: "like"}})
  }
}`,
socialIndex2:`const readDocs = Social.index("readDocs", "docs")

return <>
  <p> Number of indexed "readDocs" actions with key "docs": {readDocs.length} </p>

  <b>Indexed actions</b>
  {JSON.stringify(readDocs)}
</>
`,
wrapper:`<VaraNetwork.Wrapper>
	"Your code"
</VaraNetwork.Wrapper>`,
identicon:`<VaraNetwork.Identicon size={30} />`,
interaction:`<VaraNetwork.Interaction
  trigger={({ readState, signTransaction, getAccountInfo }) => (
    <>
      <button
        onClick={() => {
          let varaAccount = getAccountInfo();
          let info = readState(contract, contractData, params);
          signTransaction(contract, contractData, params, gas, value);
          info.then((res) => {
            //Pulling the data from the contract
            console.log(res);
          });
        }}
      >
        “Button text”
      </button>
    </>
  )}
/>;`
};