export function arrayBufferToText(buffer: ArrayLike<number> | ArrayBufferLike) {
  if (!buffer) return undefined;
  
  return new TextDecoder().decode(new Uint8Array(buffer as any));
}

export function textToArrayBuffer(text: string): ArrayBuffer {
  var enc = new TextEncoder();

  const array = enc.encode(text);

  return array.buffer.slice(array.byteOffset, array.byteLength + array.byteOffset) as ArrayBuffer;
}

export async function blobToText(blob: Blob) {
  return await blob.text();
}

export function textToBlob(text: string, type = "text/plain"): Blob {
  return new Blob([text], { type });
}

export function arrayBufferToBlob(buffer: ArrayBuffer, type = "text/plain"): Blob {
  return new Blob([new Uint8Array(buffer)], {
    type,
  });
}

export async function blobToDataURL(blob: Blob): Promise<string | undefined> {
  const reader = new FileReader();

  return new Promise((resolve) => {
    reader.onload = function (e) {
      resolve(e.target?.result?.toString());
    };
    reader.readAsDataURL(blob);
  });
}
