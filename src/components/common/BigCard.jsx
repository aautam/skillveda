
import '../../style/BigCard.css'

export const BigCard = ({ title, description, src, side , children}) => {

  // const isFlipped = side === 'right'; aa rite side ne variable ma store kari ne pan kari sakay
  return (
    <>
      <div className={`features ${side ? 'left' : ''}`}>
           <div className="features-text">
            <h1 className="features-title">{title}</h1>
            <p className="features-description">{description} {children} </p>
            </div>
            <img src={src} alt="Python" />
        </div>
        </>
  )
}


// if jo card na description ma <br /> hoy to aa rite kari sakay
// <p className="features-description">{children} </p>
// ane props ma description ni jagya par children pass kari sakay