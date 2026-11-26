import { getPermalink } from './utils/permalinks';

export const INSTAGRAM = 'https://www.instagram.com/mission.kaist';

// 문의 메일
export const CONTACT_PERSON = '전산학부 이의진 교수';
export const CONTACT_EMAIL = 'uclee@kaist.ac.kr';

// 선교센터 이용 신청 링크 (구글 폼)
// 선교센터 페이지의 '신청서' 링크가 이 주소로 연결됩니다.
export const CENTER_APPLY_URL = 'https://forms.gle/Zq2V6WcgZh9hpFDL6';

export const headerData = {
  links: [
    { text: '활동', href: getPermalink('/#about') },
    { text: '선교센터', href: getPermalink('/center') },
    { text: '문의', href: getPermalink('/#contact') },
  ],
  actions: [],
  instagram: INSTAGRAM,
};
