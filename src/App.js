import './App.css';

const images = [
    {
      src: "https://img0.baidu.com/it/u=2238321549,582030440&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      caption: "loren"
    },
    {
      src: "https://img0.baidu.com/it/u=3563370327,636231767&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
      caption: "图片2的配文"
    },
    {
      src: "https://up.deskcity.org/pic_source/27/e1/d0/27e1d0a3ba084f810fdc33469491259a.jpg",
      caption: "图片3的配文"
    }
  ];

function App() {
  return (
    <div className="container">
        {
            images.map((image, index) => (
                <div className="image-container" key={index}>
                    <img className="image" src={image.src} alt="配图" />
                    <p className="caption">{image.caption}</p>
                </div>
            ))
        }
    </div>
  )
}

export default App;
