export type EnvFn = {
  (key: string): string | undefined;
  (key: string, defaultValue: string): string;
  (key: string, defaultValue: number): number;
  (key: string, defaultValue: boolean): boolean;
  int: (key: string, defaultValue?: number) => number;
  bool: (key: string, defaultValue?: boolean) => boolean;
  array: (key: string, defaultValue?: string[]) => string[];
};


