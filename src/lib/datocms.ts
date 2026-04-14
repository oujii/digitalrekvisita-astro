const DATOCMS_TOKEN = import.meta.env.DATOCMS_READONLY_TOKEN;

interface DatoCMSResponse<T> {
  data: T;
}

export async function fetchDato<T>(query: string): Promise<T> {
  const res = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DATOCMS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error(`DatoCMS error: ${res.status} ${await res.text()}`);
  }

  const json: DatoCMSResponse<T> = await res.json();
  return json.data;
}

// Types
export interface DatoImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface DatoFile {
  url: string;
}

export interface DatoProject {
  id: string;
  title: string;
  projectMeta: string;
  description: string;
  thumbnail: DatoImage;
  blurThumbnail: boolean;
  videoMp4: DatoFile | null;
  videoWebm: DatoFile | null;
  videoPoster: DatoImage | null;
}

export interface DatoPage {
  heroTitle: string;
  heroBody: string;
  aboutTitle: string;
  aboutBody: string;
  instagramHandle: string;
  teamMembers: unknown;
}

export interface DatoLogo {
  id: string;
  name: string;
  image: DatoImage;
  displayHeight: number | null;
}
