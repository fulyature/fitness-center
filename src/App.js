import Card from "./components/Card";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CardContainerStyled } from "./components/styled/CardContainerStyled";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";

import { ThemeProvider } from "styled-components";

const data = [
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://sporcard.mncdn.com/Img/Studio/30772/a77df44e5a984c33bff969c2b7b8c8f5_xlarge1_1400.jpeg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://sporcard.mncdn.com/Img/Studio/30772/cfd4933c57f3406d98073ff92dd4b525_xlarge3_1400.jpeg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://media.istockphoto.com/id/1322158059/tr/foto%C4%9Fraf/damb%C4%B1l-su-%C5%9Fi%C5%9Fesi-spor-salonundaki-bankta-havlu.jpg?s=612x612&w=0&k=20&c=0mhzSTR-exr-Ti4LRvSFF4tVYDfW7HmiboadsbiDzxM=",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
  {
    desc: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcükle",
    src: "https://assets-us-01.kc-usercontent.com/a07c5ec0-e08a-0014-c8c5-a7a73768c21f/b04eb73a-ced9-4992-a65b-cfd3bd8dd256/Gym-C4-1202.jpg",
  },
];
function App() {
  const styles = {
    colors: {
      primary: "#331D2C",
      secondary: "#3F2E3E",
    },
    breakpoints: { xs: "300px", sm: "500px", md: "750px" },
    margin: {},
    padding: {},
  };
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Nav />
      <Container>
        <Header />
        <CardContainerStyled>
          {data.map((item) => (
            <Card desc={item.desc} src={item.src} />
          ))}
        </CardContainerStyled>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
