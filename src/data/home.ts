// 메인 페이지 내용
// 이미지는 '~/assets/images/파일이름' 경로로 적으면 됩니다 (빌드 시 자동 최적화).
// 설명 안의 **글자**는 굵게 표시됩니다.
import type { Item } from '~/components/site/ItemGrid.astro';

export const hero = {
  image: '~/assets/images/main.jpg',
  position: 'center 55%',
};

export const activities: Item[] = [
  {
    title: 'KAIST 복음화 사역',
    description:
      'KAIST 캠퍼스에 복음이 전해지도록 기도하고 섬깁니다. 교직원으로서 일터에서 그리스도인의 삶을 살아 내며, 학생과 동료들에게 복음의 통로가 되기를 소망합니다.',
    image: '~/assets/images/kaist-gospel.jpg',
  },
  {
    title: 'KAIST 학생 기독동아리 동역',
    description:
      '캠퍼스의 여러 학생 기독동아리와 함께 동역합니다. 신앙의 선배로서 학생들의 공동체를 위해 기도하고, 필요한 곳에 힘을 보태며 함께 걸어갑니다.',
    image: '~/assets/images/kaist-geese.jpg', // Wikimedia Commons (CC0)
  },
  {
    title: '정기 기도모임',
    description:
      '매주 **수요일 정오(12–1PM), N2 3층 313호(대강당 앞 건물)**에서 모입니다. 학교와 학생, 선교 현장, 그리고 서로의 삶을 위해 함께 기도하며 한 주의 중심을 다시 세웁니다.',
    image: '~/assets/images/prayer.jpg',
  },
  {
    title: '선교 후원',
    description:
      'KAIST 출신 선교사님들과 KCIC 국제교회 등의 사역을 후원합니다. 회원들의 정기 후원으로 캠퍼스를 넘어 세계 곳곳의 선교 현장과 함께합니다.',
    image: '~/assets/images/kcic.jpg',
  },
  {
    title: 'KAIST 선교센터 운영',
    description:
      '대전 서구 내동의 KAIST 선교센터를 운영합니다. 회원들의 기부로 2010년에 세워진 이곳은 캠퍼스 사역자와 그리스도인들을 위한 신앙 훈련, 기도, 안식의 공간입니다.',
    image: '~/assets/images/mission-center.jpg',
    link: { text: '이용 안내 및 신청', href: '/center' },
  },
  {
    title: '교제와 식사 모임',
    description:
      '함께 식사하며 부서와 직군을 넘어 교제합니다. 같은 캠퍼스에서 일하는 동역자로서 서로의 일과 삶을 나누고, 기도 제목을 함께 품습니다.',
    image: '~/assets/images/fellowship.jpg', // 후안 데 후아네스, 「최후의 만찬」 (퍼블릭 도메인)
  },
];
