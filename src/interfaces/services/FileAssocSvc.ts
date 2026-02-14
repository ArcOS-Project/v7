import type { IBaseService } from "$interfaces/service";
import type { ExpandedFileAssociationInfo, FileAssociationConfig } from "$types/assoc";

export interface IFileAssocService extends IBaseService {
  start(): Promise<void>;
  updateConfiguration(
    callback: (config: FileAssociationConfig) => FileAssociationConfig | Promise<FileAssociationConfig>
  ): Promise<void>;
  defaultFileAssociations(): FileAssociationConfig;
  getFileAssociation(path: string): ExpandedFileAssociationInfo | undefined;
  getUnresolvedAssociationIcon(path: string): string;
  getConfiguration(): FileAssociationConfig;
}
