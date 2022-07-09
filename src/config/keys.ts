/* eslint-disable @typescript-eslint/naming-convention */
export namespace Keys {
  export const carpetaImagenProducto = '../../archivos/productos/';
  export const nombreCampoImagenProducto = 'file';
  export const extensionesPermitidasIMG: string[] = [
    '.PNG',
    '.JPG',
    '.JPEG',
    '.SVG',
  ];
  export const tamMaxImagenProducto = 1024 * 1024;
  export const carpetaDocumentoPersona = '../../archivos/documentos';
  export const nombreCampoDocumentoPersona = 'file';
  export const extensionesPermitidasDOC: string[] = [
    '.PDF',
    '.DOC',
    '.DOCX',
    '.XLS',
    '.XLSX',
  ];
  export const url_validar_token = 'http://localhost:5001/token-validate';
  export const rol_administrador = '6271f44587c1302f0413b05d';
  export const arg_token = 'token';
  export const arg_rol_validar = 'role';
}
