import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
// import { LinguistEducationalInstitution } from './linguisteducationalinstitution.model';
// import { LinguistEducationalInstitution } from './linguisteducationalinstitution.model';
import { LinguistElligibleCountry } from './linguistelligiblecountry.model';
import { LinguistOtherIdDocument } from './linguistotheriddocument.model';
import { LinguistService } from './linguistservice.model';
import { LinguistWorkExperienceRole } from './linguistworkexperiencerole.model';
import { User } from './user.model';

@Table({ timestamps: false })
export class Linguist extends Model<Linguist> {

  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @Column
  registrationStatus: string;

  /// Personal Details
  ///
  @Column
  dateOfBirth: Date;
  
  @Column
  gender: string;
  
  @Column
  businessEmail: string;
  
  @Column
  businessPhone: string;
  
  @Column
  onlineCallingDetails: string;
  
  @Column
  addressHouseNumberName: string;
  
  @Column
  addressStreet: string;
  
  @Column
  addressTown: string;
  
  @Column
  addressCity: string;
  
  @Column
  addressCounty: string;
  
  @Column
  addressPostcodeOrZipcode: string;
  
  @Column
  addressCountry: string;

  @Column
  firstReferenceName: string;
  
  @Column
  firstReferenceEmail: string;
  
  @Column
  firstReferenceAddress: string;
  
  @Column
  firstReferencePhone: string;

  @Column
  secondReferenceName: string;
  
  @Column
  secondReferenceEmail: string;
  
  @Column
  secondReferenceAddress: string;
  
  @Column
  secondReferencePhone: string;

  /// ID & Tax
  ///
  @Column
  birthNationality: string;

  @Column
  currentNationality: string;

  @Column
  currentResidenceCountry: string;

  @Column
  rightToWorkUK: boolean;

  @HasMany(() => LinguistElligibleCountry)
  elligibleCountries: LinguistElligibleCountry[];

  @Column
  idDocumentName: string;

  @Column
  nationalInsuranceNumber: string;

  @Column
  personalTaxReference: string;

  @Column
  vatNumber: string;

  @Column
  professionalLiabilityInsurance: string;

  @Column
  professionalLiabilityExpirationDate: string;

  @Column
  professionalLiabilityDocumentName: string;

  @HasMany(() => LinguistOtherIdDocument)
  otherIdDocuments: LinguistOtherIdDocument[];

  /// Bank Details
  ///
  @Column
  preferredCurrency: string;

  @Column
  bankHolderFullName: string;

  @Column
  bankSortCode: string;

  @Column
  bankAccountNumber: number;

  @Column
  bankBranchName: string;

  @Column
  bankIBAN: string;

  @Column
  bankSwiftCode: string;

  @Column
  bankName: string;

  @Column
  bankAddress: string;

  @Column
  bankPostalZipcode: string;

  @Column
  paypalEmail: string;

  /// Services
  ///
  @HasMany(() => LinguistService)
  services: LinguistService[];

  /// Languages
  ///
  @Column
  motherToungue: string;

  @Column
  primaryTargetLanguage: string;

  @Column
  primarySourceLanguage: string;

  /// Education
  ///
  // @HasMany(() => LinguistEducationalInstitution)
  // educationalInstitutions: LinguistEducationalInstitution[];

  /// Work Experience
  ///
  @HasMany(() => LinguistWorkExperienceRole)
  workExperienceRoles: LinguistWorkExperienceRole[];

  /// Security
  ///
  @Column
  criminalRecord: string;

  @Column
  securityPoliceClearance: string;

  @Column
  securityClearanceLevel: string;
  // -> securityClearanceDocument: 

  @Column
  securityCertificateExpiryDate: Date;
  
  @Column
  criminalRecordDetails: string;

  @Column
  securityClearanceOther: string;

  /// Equality
  ///

  @Column
  submittingEqualityForm: boolean;

  @Column
  additionalInfo: string;
  // -> resumeDocument: file
  // -> otherDocuments: file[]

  @Column
  disabilityOrNeeds: string;

  @Column
  disabilityOrNeedsInfo: string;

  @Column
  shareDisabilityInfoWith: string;
}
