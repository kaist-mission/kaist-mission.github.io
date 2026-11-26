// 페이지 스크린샷: node scripts/screenshot.mjs [출력 폴더] [경로...]
// 개발 서버(http://localhost:4321)가 켜져 있어야 합니다.
import { chromium } from 'playwright';

const [outDir = 'screenshots', ...paths] = process.argv.slice(2);
const pages = paths.length ? paths : ['/', '/center'];
const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true },
};

const browser = await chromium.launch();
for (const [name, viewport] of Object.entries(viewports)) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: viewport.deviceScaleFactor ?? 1, isMobile: viewport.isMobile });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(`http://localhost:4321${p}`, { waitUntil: 'networkidle' });
    // 스크롤 등장 애니메이션을 모두 표시
    await page.addStyleTag({ content: '*{animation:none!important;transition:none!important;opacity:1!important}' });
    const file = `${outDir}/${name}${p === '/' ? '-home' : p.replaceAll('/', '-')}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
  }
  await ctx.close();
}
await browser.close();
