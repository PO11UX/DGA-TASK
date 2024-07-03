import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  value1: string = '';
  value2Input: string = '';
  value2: string[] = [];
  matchResults: { value: string, percentage: number }[] = [];

  addValue2(): void {
    if (this.value2Input.trim()) {
      this.value2.push(this.value2Input.trim());
      this.value2Input = '';
    }
  }

  compareValues(): void {
    this.matchResults = this.value2.map(str2 => {
      return {
        value: str2,
        percentage: this.getMatchPercentage(this.value1, str2)
      };
    });
  }

  getMatchPercentage(str1: string, str2: string): number {
    const maxLength = Math.max(str1.length, str2.length);
    const similarity = this.calculateSimilarity(str1, str2);
    return (similarity / maxLength) * 100;
  }

  private calculateSimilarity(str1: string, str2: string): number {
    let matches = 0;
    const length = Math.min(str1.length, str2.length);

    for (let i = 0; i < length; i++) {
      if (str1[i] === str2[i]) {
        matches++;
      }
    }
    return matches;
  }

  roundValue(value: number): number {
    return Math.round(value * 100) / 100;
  }

}
