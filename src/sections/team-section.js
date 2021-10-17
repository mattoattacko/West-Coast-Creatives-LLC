/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaDumpsterFire, FaInstagram } from 'react-icons/fa';

// import Member1 from 'assets/team/member-1.png';
// import Member2 from 'assets/team/member-2.png';
// import Member3 from 'assets/team/member-3.png';
// import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';
import matt_pfp from 'assets/team/matt_pfp.png';
import eshan_pfp from 'assets/team/eshan_pfp.png';
import kris_pfp from 'assets/team/kris_pfp.png';
import tatsu_pfp from 'assets/team/tatsu_pfp.png';
import julio_pfp from 'assets/team/julio_pfp.png';

const data = [
  {
    id: 1,
    imgSrc: eshan_pfp,
    altText: 'Eshan',
    title: 'Eshan',
    designation: 'Founder & Software Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/WestCoastCreativesLLC/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/home',
        icon: <FaDumpsterFire />,
      },
      {
        id: 3,
        name: 'Instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: kris_pfp,
    altText: 'Kris',
    title: 'Kris',
    designation: 'Product Director',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/WestCoastCreativesLLC/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/home',
        icon: <FaDumpsterFire />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: matt_pfp,
    altText: 'Matthew',
    title: 'Matthew',
    designation: 'Co-Founder & Web Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/WestCoastCreativesLLC/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/home',
        icon: <FaDumpsterFire />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: tatsu_pfp,
    altText: 'Tatsi',
    title: 'Tatsi',
    designation: 'CTO & Project Management',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/WestCoastCreativesLLC/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/home',
        icon: <FaDumpsterFire />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Mike',
    title: 'Mike',
    designation: 'UX & UI Design',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/WestCoastCreativesLLC/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/home',
        icon: <FaDumpsterFire />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: julio_pfp,
    altText: 'Julio',
    title: 'Julio',
    designation: 'Information Security',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/WestCoastCreativesLLC/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/home',
        icon: <FaDumpsterFire />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

// containers center everything
export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="Meet Our Team"
          title="EPA Certified GMO Free"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard 
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}

        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
