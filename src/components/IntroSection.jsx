 import facebook_i from './icons/icons8-facebook.svg';
 import instagram_i from './icons/icons8-instagram.svg';
 import twitter_i from './icons/icons8-twitter.svg';
 import main_i from './underConstructioon/mirage-page-under-construction_new.png';

 const IntroSection = () => {
    return (
        <div className="row w-100 mb-5" id="header-section">
        
      <div className="col-md-6">
        <div className="display-flex flex-column p-4">
          <p id="header-text">
            <span className="text-info" style={{fontSize: 'larger'}}>Hi there!</span> My name is Ian and I am a
            painter. Not the kind of
            <span className="text-warning">painter</span> you might be thinking of.
            I paint the <span style={{color: 'palevioletred'}}>internet</span>.
          </p>
          <p id="header-text-footer" className="text-justify">
            Am a <span className="text-danger">Web</span>
            <span style={{color: 'green'}}>Designer</span> based in Nairobi, Kenya
            with a keen eye for design and who enjoys solving complex design problems.
          </p>
          <h6 id="connect">Get in touch</h6>
          <div className="d-flex">
              <a href="https://facebook.com"><img src={facebook_i} style={{width: '60px'}} alt='facebook logo'/></a>
              <a href="https://twitter.com"><img src={twitter_i} style={{width: '60px'}} alt='twitter logo'/></a>
             <a href="https://www.instagram.com/i_mugenya/"><img src={instagram_i} style={{width: '60px'}} alt='instagram logo'/></a>
            </div>
        </div>
      </div>
      <div className="col-md-6" data-aos="zoom-in">
        <img className="img-fluid" src={main_i} alt='page_i'/>
      </div>
        </div>
    )
}

export default IntroSection;