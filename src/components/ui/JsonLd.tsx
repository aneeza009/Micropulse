/**
 * Renders one JSON-LD block. Kept in a component so pages declare structured
 * data the same way and nobody hand-writes a <script> tag with unescaped JSON.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
