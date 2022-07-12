export function AddNew(props) {
    return (
        <button
            className="App-add-new-button"
            onClick={() => { props.feeds.push(props.feeds.length); console.log(props.feeds) } }
        >
            (+) ADD NEW
        </button>
    );
}