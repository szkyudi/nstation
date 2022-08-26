export interface Station {
  // 駅名
  name: string;

  // 前の駅名（始発駅の場合はnull）
  prev: string | null;

  // 次の駅名（終点駅の場合はnull）
  next: string

  // 駅の経度（世界測地系）
  x: number;

  // 駅の緯度（世界測地系）
  y: number;

  // 駅の郵便番号
  postall: string;

  // 駅の存在する都道府県名
  prefecture: string;

  // 駅の存在する路線名
  line: string;
}
