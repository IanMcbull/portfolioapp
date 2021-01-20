import facebook_i from './icons/icons8-facebook.svg';
import instagram_i from './icons/icons8-instagram.svg';
import twitter_i from './icons/icons8-twitter.svg';
import github_i from './icons/icons8-github-96.png';
const Footer = () => {
    const getYear = () =>{
       return  new Date().getUTCFullYear()
    }
    return (
        <div class="p-4" id="footer">
    <div className="row">
      <div className="col-md-12">
      <h6>Favorite Quote</h6>
      <blockquote className="blockquote">
        <p className="mb-0">That's all any of us are: amateurs, we don't live long enough to be anything else.</p>
        <footer className="blockquote-footer">Charlie Chaplin</footer>
      </blockquote>
      <div className="d-flex flex-column">
        <h5 id="footer_logo">Ian Mugenya</h5>
        <div className="d-flex">
          <a href="https://facebook.com"><img src={facebook_i} style={{width: '60px'}} alt="facebook"/></a>
          <a href="https://twitter.com"><img src={twitter_i} style={{width: '60px'}} alt="twitter"/></a>
         <a href="https://instagram.com/i_mugenya/"><img src={instagram_i} style={{width: '60px'}} alt="instagram"/></a>
         <a href="https://github.com"><img src={github_i} style={{width: '60px'}} alt="github"/></a>
        </div>
      </div>
      <p class="text-center mb-0" id="footer_text"><span id="year">{getYear()}</span> Ian Mugenya.</p>
      </div>
    </div>
        </div>
    )
}
export default Footer;