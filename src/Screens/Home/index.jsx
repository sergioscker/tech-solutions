import { Logo } from '../../components/logo';
import { Input } from '../../components/inputs';
import { BagIcon } from '../../components/bag-icon';
import { InformationTop } from '../../components/container-top';
import { Button } from '../../components/buttons';
import { SocialMedia } from '../../components/social-media';
import { PageCardsGames } from '../PageCards';

import IsolationMode from '../../assets/isolation-mode.svg';
import UserExperience from '../../assets/user-experience.svg';
import ArrowForward from '../../assets/arrow-forward.svg';
import ArrowForward2 from '../../assets/arrow-forward2.svg';
import Explore from '../../assets/explore.svg';
import Glasses from '../../assets/glasses.svg';
import BlueStar from '../../assets/blue-star.svg';
import PeoplesViews from '../../assets/peoples-views.svg';
import People from '../../assets/people.svg';
// import Coments from '../../assets/coments.svg';

import {
  Header,
  ContainerMain,
  SectionInformations,
  ContainerTop,
  SectionDescription,
  ContainerBody,
  GamingCreator,
  GamingCreate,
  TopGames,
  Footer,
  ContainerGlasses,
} from './styles';

export function Home() {
  return (
    <>
      <ContainerMain>
        <SectionInformations>
          <img className="background" src={IsolationMode} alt="background" />

          <Header>
            <div className="links">
              <a>Home</a>
              <a>Catalog</a>
              <a>Contact</a>
              <a>Features</a>
            </div>

            <div className="logo">
              <Logo />
            </div>

            <div>
              <Input placeholder="Search games & products.." />
            </div>
            <BagIcon />
          </Header>

          <ContainerTop>
            <InformationTop subtitle="Virtual Headsets" />

            <div className="container-buttons">
              <Button theme="blue" type="button">
                Visit Sttore <img src={ArrowForward} alt="arrow-forward" />
              </Button>

              <Button type="button">
                <img src={Explore} alt="expore-icon" /> Explore
              </Button>
            </div>

            <SocialMedia />
          </ContainerTop>

          <img
            className="glasses-using"
            src={UserExperience}
            placeholder="text-tecnology"
          />
        </SectionInformations>

        <SectionDescription>
          <h1>
            Our Virtual Headsets
            <br />
            Shine with Unique
            <br />
            Features!
          </h1>
          <ContainerBody>
            <div className="high-resolution">
              <img src={BlueStar} />
              High-resolution OLED or LCD screens:
              <br />
              Provide sharp and clear visuals.
            </div>

            <div className="refresh-rate">
              <img src={BlueStar} />
              Refresh rate: Higher refresh rates reduce
              <br />
              motion sickness and provide.
            </div>

            <div className="inside-tracking">
              <img src={BlueStar} />
              Inside-out tracking: Built-in sensors
              <br />
              (cameras or other sensors).
            </div>

            <div className="eye-tracking">
              <img src={BlueStar} />
              Eye tracking: Monitors the movement of
              <br />
              the users eyes, allowing for more.
            </div>

            <div className="high-resolution1">
              <img src={BlueStar} />
              High-resolution OLED or LCD screens:
              <br />
              Provide sharp and clear visuals.
            </div>

            <div className="refresh-rate1">
              <img src={BlueStar} />
              Refresh rate: Higher refresh rates
              <br />
              reduce motion sickness and provide.
            </div>
          </ContainerBody>
        </SectionDescription>

        <ContainerGlasses>
          <img src={Glasses} />
        </ContainerGlasses>

        <GamingCreate>
          <GamingCreator>
            <h1>
              Jane Wilson,
              <br />
              Gaming Creator
            </h1>

            <p>
              A virtual headset creator is an individual or company that
              specializes in designing
              <br />
              and manufacturing virtual reality headsets, also known as VR
              headsets.
            </p>

            <button type="button">
              Read my blog <img src={ArrowForward2} alt="arrow-forward" />
            </button>

            <img src={PeoplesViews} />
          </GamingCreator>

          <div className="create">
            <img src={People} />
          </div>
        </GamingCreate>

        <TopGames>
          <h1>Top Games</h1>

          <p>
            If you buy video 2 games, you will receive 1
            <br />
            video game for free, along with a <span>50%</span> discount.
          </p>

          <div className="container-buttons">
            <button>
              <img className="arrow-left" src={ArrowForward2} />
            </button>

            <button>
              <img src={ArrowForward2} />
            </button>
          </div>
        </TopGames>

        <PageCardsGames />

        <Footer>
          <div className="container-contact">
            <Logo />

            <label>'(+351)939274154'</label>
          </div>

          <div className="container-header">
            <h3>Menu</h3>
            <a>Home</a>
            <a>Catalog</a>
            <a>Contact</a>
            <a>Features</a>
          </div>

          <div className="container-company">
            <h3>Company</h3>
            <a>Login</a>
            <a>Sign Up</a>
            <a>Privacy</a>
            <a>Products</a>
          </div>

          <div className="container-newcastle">
            <h3>Subscribe Our News Letter</h3>
            <p>
              Sure, please provide your email address to
              <br />
              subscribe to newsletter
            </p>

            <div className="subscribe">
              <input type="text" placeholder="Enter your mail..." />
              <button>Subscribe</button>
            </div>
          </div>
        </Footer>
      </ContainerMain>
    </>
  );
}
