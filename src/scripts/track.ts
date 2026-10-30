/*
 * Eventos do GA4. Os links declaram o que são com data-track-*, e um único
 * listener delegado no documento envia o evento. O gtag pode não existir
 * (bloqueador de anúncios), então nada aqui pode lançar erro.
 */
type Params = Record<string, string | number>;

export const track = (name: string, params: Params) => {
  try {
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('event', name, params);
  } catch {
    // Medição nunca deve quebrar a página.
  }
};

const onActivate = (event: MouseEvent) => {
  // Clique primário (inclui Enter no teclado) e clique do meio, que abre em nova aba.
  if (event.type === 'auxclick' && event.button !== 1) return;
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('a[data-track-type]');
  if (!link) return;
  const { trackType, trackId, trackPosition } = link.dataset;
  track('select_content', {
    content_type: trackType ?? '',
    content_id: trackId ?? '',
    link_url: link.href,
    position: Number(trackPosition),
  });
};

document.addEventListener('click', onActivate);
document.addEventListener('auxclick', onActivate);
