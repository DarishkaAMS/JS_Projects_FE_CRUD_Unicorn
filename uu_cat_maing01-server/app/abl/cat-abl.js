"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/cat-error.js");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
  updateUnsupportedKeys: {
    code: `${Errors.Update.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
  getUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
  listUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
  deleteUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class CatAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("cat");
  }

  async delete(awid, dtoIn) {

    const validationResult = this.validator.validate("catDeleteDtoInType", dtoIn);
    const uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );
    
    const cat = await this.dao.get(awid, dtoIn.id);
    if (!cat) {
      throw new Errors.Delete.CatDoesNotExist({ uuAppErrorMap }, { itemId: dtoIn.id });
    }
    
    const dtoOut = await this.dao.delete(awid, dtoIn.id);
    
    return { ...dtoOut, uuAppErrorMap };
  }

  async list(awid, dtoIn) {
    const validationResult = this.validator.validate("catListDtoInType", dtoIn);

    const uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    const dtoOut = await this.dao.list(awid);
    
    return { ...dtoOut, uuAppErrorMap };
  };

  async get(awid, dtoIn) {
    // const catInstance = await CatMainAbl.checkInstance(
    //   awid,
    //   Errors.Get.CatInstanceDoesNotExist
    // );

    const validationResult = this.validator.validate("catGetDtoInType", dtoIn);

    const uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );
    const dtoOut = await this.dao.get(awid, dtoIn.id);

    if (!dtoOut) {
      throw new Errors.Get.CatDoesNotExist(uuAppErrorMap, { catId: dtoIn.id });
    }
    return { dtoOut, uuAppErrorMap };
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("updateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    const cat = await this.dao.get(awid, dtoIn.id);

    if (!cat) throw new Errors.Update.CatDoesNotExist(uuAppErrorMap, { catId: dtoIn.id });

    const uuObject = { ...cat, ...dtoIn };
    let dtoOut = null;

    try {
      dtoOut = await this.dao.update(uuObject );
    } catch (e) {
      throw new Errors.Update.CatUpdateDaoFailed(uuAppErrorMap, {dtoIn, cause: e})
    }

    return { ...dtoOut, uuAppErrorMap };
  }

  async create(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("catCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let cat;
    try {
      cat = await this.dao.create({...dtoIn, awid});
    } catch (e) {
        throw new Errors.Create.CatDaoCreateFailed({ uuAppErrorMap }, {dtoIn, cause: e});
      }
    return { ...cat, uuAppErrorMap };
    }
}

module.exports = new CatAbl();
