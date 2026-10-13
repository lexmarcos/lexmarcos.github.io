import brasilgraficosShot from '../assets/projects/brasilgraficos.webp';
import keyballShot from '../assets/projects/keyball.webp';
import eightDiscShot from '../assets/projects/8disc.webp';
import telinhaShot from '../assets/projects/telinha.webp';

export const profile = {
  name: ['Marcosuel', 'Filho'],
  handle: 'markzuel',
  bio: 'Engenheiro de software há 8 anos. Gosto de resolver problemas por caminhos que ninguém tentou e de criar produtos rápidos, privados e sem atrito.',
};

export const github = {
  label: 'GitHub',
  href: 'https://github.com/lexmarcos',
  icon: 'simple-icons:github',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcosuelfilho/', icon: 'simple-icons:linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/markzuel/', icon: 'simple-icons:instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Markzuel', icon: 'simple-icons:youtube' },
];

export const projects = [
  {
    domain: 'brasilgraficos.com.br',
    shot: brasilgraficosShot,
    href: 'https://brasilgraficos.com.br',
    description: 'Os principais dados do Brasil reunidos em gráficos.',
    icon: 'solar:chart-2-linear',
  },
  {
    domain: 'keyball.pro',
    shot: keyballShot,
    href: 'https://keyball.pro',
    description: 'Um jogo de vôlei que se joga com o teclado.',
    icon: 'solar:keyboard-linear',
  },
  {
    domain: '8disc.pro',
    shot: eightDiscShot,
    href: 'https://8disc.pro',
    description: 'Comprime vídeos no navegador. Nada sai do seu computador.',
    icon: 'solar:video-frame-cut-linear',
  },
  {
    domain: 'telinha.online',
    shot: telinhaShot,
    href: 'https://telinha.online',
    description: 'Transmita sua tela na hora, sem conta e sem rastreadores. Baixa latência e alta qualidade.',
    icon: 'solar:screencast-2-linear',
  },
];

export const clients = [
  { name: 'Intelbras', icon: 'intelbras', ratio: 500 / 97 },
  { name: 'ASUS', icon: 'asus', ratio: 24 / 4.956 },
];

export const work = ['Instituto Metrópole Digital', 'Instituto Todos pela Saúde'];

export const education = {
  degree: 'Bacharel em Tecnologia da Informação',
  school: 'UFRN',
  schoolFull: 'Universidade Federal do Rio Grande do Norte',
};
