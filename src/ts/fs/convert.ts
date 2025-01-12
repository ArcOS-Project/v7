import { Log } from "$ts/kernel/logging";

export function arrayToText(buffer: ArrayLike<number> | ArrayBufferLike) {
  return new TextDecoder().decode(new Uint16Array(buffer as any));
}

export function textToArrayBuffer(text: string): ArrayBuffer {
  var enc = new TextEncoder();

  const array = enc.encode(text);

  return array.buffer.slice(
    array.byteOffset,
    array.byteLength + array.byteOffset
  ) as ArrayBuffer;
}

export async function blobToText(blob: Blob) {
  return await blob.text();
}

export function textToBlob(text: string, type = "text/plain"): Blob {
  return new Blob([text], { type });
}

export function arrayToBlob(buffer: ArrayBuffer, type = "text/plain"): Blob {
  return new Blob([new Uint8Array(buffer)], {
    type,
  });
}
