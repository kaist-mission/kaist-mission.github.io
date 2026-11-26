// 선교센터 페이지 내용 (출처: '선교관 운영 수칙' 문서, 읽기 쉽게 다듬음)
import type { BulletItem } from '~/components/site/BulletList.astro';

export const center = {
  image: '~/assets/images/mission-center.jpg',
  imageAlt: '붉은 벽돌로 지어진 KAIST 선교센터 외관',
  position: 'center 25%',
  intro:
    'KAIST 복음 사역을 위해 동아리와 공동체를 섬기는 구성원, 그리고 KAIST와 함께 선교하는 크리스천들의 신앙 훈련, 기도, 안식을 위한 공간입니다. 회원들의 기부로 2010년에 완공되었으며, 공익법인의 종교시설로서 종교 활동 목적에 맞게 이용하는 것을 원칙으로 합니다.',
  address: '대전광역시 서구 동서대로 997번길 14-10',
  addressOld: '내동 25-24',
  contact: { name: '노시경', phone: '042-350-2382' },
};

export const facts: BulletItem[] = [
  '약 23평 규모(대지 80평): 거실 1, 방 2, 다락방 1, 화장실 2',
  '야외 데크 약 8평',
  '비품: 냉장고, 전기레인지, 침대 2, 옷 거치대, 세탁기, 전기밥솥, 식기 등 생활용품',
];

export const rules: BulletItem[] = [
  {
    label: '이용 목적',
    text: '크리스천 윤리와 종교 활동 목적에 맞게 이용 (음주, 고성방가, 비윤리적 행위, 영리 활동 금지)',
  },
  { label: '이웃 배려', text: '주변 주민에게 피해가 가지 않도록 이용' },
  {
    label: '청소와 정리',
    text: '사용 후 청소 필수, 음식물 찌꺼기와 쓰레기는 철저히 정리, 집기는 제자리에 (장기간 이용 시 시설 환경 관리 포함)',
  },
  {
    label: '퇴실 전 확인',
    text: '전기(난방·에어컨)와 수돗물 절약, 모든 전원 끄기, 상주 관리자가 없으므로 문단속 철저',
  },
];
